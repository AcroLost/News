import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { getNews } from './api/api';

const NewsList = ({ navigation }) => {

  const [newsElements, setNewsElements] = useState([]);

  useEffect(() => {
    getNews()
      .then((res) => {
        setNewsElements(res.data.news);
      }).catch((e) => {

        alert(e);
      })
  }, []);

  const newsList = newsElements.map(item => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('News', { item })} key={item.id} style={styles.news}>
        <View style={styles.newsWrapper}>
          <Image source={{ uri: item.picture }} style={styles.newsImage} />
          <View style={styles.newsContainer}>
            <Text numberOfLines={2} style={styles.newsTitle}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.newsDescr}>{item.subtitle}</Text>
          </View>
        </View>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>12:00</Text>
          <Text style={styles.time}>12.09.20</Text>
        </View>
      </TouchableOpacity>
    );
  })





  return (
    <View style={styles.main}>
      <ScrollView>
        {newsList}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    paddingTop: 8,

  },
  news: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    borderRadius: 12

  },
  newsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  newsImage: {
    width: 72,
    height: 72,
    borderRadius: 8
  },
  newsContainer: {
    marginLeft: 10,
    flexShrink: 1
  },
  newsTitle: {
    fontFamily: 'HelveticaNeueCyr-Bold',
    letterSpacing: 0.2,
    color: '#2A2C30',
    lineHeight: 18,
  },
  newsDescr: {
    marginTop: 3,
    fontFamily: 'HelveticaNeueCyr-Light',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.2,
    color: '#7F8083',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 1,
  },
  time: {
    marginLeft: 6,
    fontFamily: 'HelveticaNeueCyr-Medium',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#C7C8CA',
  }
});

export default NewsList;