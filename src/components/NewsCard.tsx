import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';

const NewsCard = ({ article }) => {
  const { title, description, urlToImage, publishedAt, source } = article;

  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.source}>{source.name}</Text>
        <Text style={styles.publishedAt}>{new Date(publishedAt).toLocaleDateString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    width: width * 0.9, // Adjust width based on screen width
    alignSelf: 'center',
  },
  image: {
    width: width * 0.3, // Adjust width based on screen width
    height: width * 0.3, // Adjust height to maintain aspect ratio
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  source: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 4,
  },
  publishedAt: {
    fontSize: 12,
    color: 'gray',
  },
});

export default NewsCard;
