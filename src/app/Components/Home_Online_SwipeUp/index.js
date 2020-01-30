import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { Card, Button, CardSection, CardHeader } from '../Card2/common';
import {styles} from './Stylesheet';

function Item({ title, image }) {
  return (
    <Card>
      <CardHeader>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={require('../../assets/Images/boy.png')}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text style={{ color: '#fff', backgroundColor: '#ea0788', padding: 5, borderRadius: 25, alignSelf: 'center' }}>{title}</Text>
        </View>
        <View style={styles.headerContentStyle2}>
          <Text style={styles.headerTextStyle}>25</Text>
          <Text>2.2 Km</Text>
        </View>
      </CardHeader>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>Pick Up Location</Text>
          <Text>Marathahalli</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text>DROP OFF</Text>
          <Text>Silk Board</Text>
        </View>
      </CardSection>
      <CardSection>
        <Button>
          Accept
        </Button>
      </CardSection>
    </Card>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
}



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: require('../../assets/AcceptJobs.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Fourth Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Fifth Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Six Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Seven Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Eight Item',
    image: require('../../assets/AcceptJobs.png'),

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Nine Item',
    image: require('../../assets/AcceptJobs.png'),

  },
];