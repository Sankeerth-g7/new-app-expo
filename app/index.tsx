import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import useSWR from 'swr'; // Import the useSWR hook
import SwipeButton from '../src/components/SwipeButton';
import NewsCard from '../src/components/NewsCard';
// import { NEWS_API_KEY } from '@env';




const fetcher = (url) => fetch(url).then((res) => res.json()); // Define a fetcher function

const App = () => {
  const [fetchNews, setFetchNews] = useState(false);

  const handleSwipeSuccess = () => {
    setFetchNews(true);
  };

  // Define the API endpoint
  const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=APIKEY`;// api for fetching should keep api key in env(TODO) 

  // Use the useSWR hook to fetch data from the API endpoint
  const { data, error, isValidating: isLoading } = useSWR(fetchNews ? apiUrl : null, fetcher);

  if (error) {
    return <Text style={styles.forText}>Error fetching data</Text>;
  }

  if (!data && !isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <SwipeButton onSwipeSuccess={handleSwipeSuccess} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Text style={styles.forText}>Loading News</Text>
      ) : (
        <FlatList
          data={data.articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <NewsCard article={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set background color to black
  },
  forText: {
    color: 'green', // Change text color to green as getting merged with background
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
  },
});

export default App;
