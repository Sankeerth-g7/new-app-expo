import React, { useRef } from 'react';
import { View, PanResponder, Animated, StyleSheet, Text } from 'react-native';

const SwipeButton = ({ onSwipeSuccess }: { onSwipeSuccess: () => void }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Limit the movement of the ball within the button bounds
        let newX = gesture.dx;
        if (newX < 0) newX = 0;
        else if (newX > 170) newX = 170; // Adjust this value as needed
        Animated.event([null, { dx: pan.x }], { useNativeDriver: false })(
          null,
          { dx: newX }
        );
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 150) {
          // Swipe threshold
          onSwipeSuccess();
        }
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.swipeable}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.ball,
            { transform: [{ translateX: pan.x }] },
          ]}
        />
      </View>
      <Text style={styles.text}>Swipe to Fetch News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  swipeable: {
    width: 200,
    height: 50,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'relative',
    overflow: 'hidden', // Ensure the ball stays within the button bounds
  },
  ball: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    position: 'absolute',
    left: 0, // Initial position of the ball on the left side
    top: 10, // Adjust this value to center the ball vertically
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SwipeButton;