import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const News = ({ route }) => {

  const { picture, title, subtitle, fulltext } = route.params.item

  return (
    <View style={styles.main}>
      <ScrollView>

        <View>
          <Image source={{ uri: picture }} style={styles.newsImage} />
          <Text style={styles.newsTitle}>{title}</Text>
          <Text style={styles.newsSub}>{subtitle}</Text>
          <Text style={styles.newsDescr}>{fulltext}</Text>
          <View style={styles.timeWrapper}>
            <Text style={styles.time}>12:00</Text>
            <Text style={styles.time}>12.09.20</Text>
          </View>
        </View >


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    paddingTop: 32
  },

  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 12
  },
  newsContainer: {
    marginLeft: 10,
    flexShrink: 1
  },
  newsTitle: {
    marginTop: 19,
    fontFamily: 'HelveticaNeueCyr-Medium',
    letterSpacing: 0.2,
    color: '#2A2C30',
    lineHeight: 22,
    fontSize: 16
  },
  newsSub: {
    marginTop: 7,
    fontFamily: 'HelveticaNeueCyr-Light',
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#2A2C30',
  },
  newsDescr: {
    fontFamily: 'HelveticaNeueCyr-Light',
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#7F8083',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 13,
    marginBottom: 29
  },
  time: {
    marginRight: 6,
    fontFamily: 'HelveticaNeueCyr-Medium',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#C7C8CA',
  }
});

export default News;