//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { styles } from './Stylesheet';
// create a component
class Feedback extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Card}>
          {/* <View> */}
          <Image
            source={require('../../assets/Images/boy.png')}
            style={styles.imgContainer}
          />
          {/* </View> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.NameTxt}>Gourav Taneja</Text>
              <Text style={{ fontSize: 15, fontWeight: '200', color: '#c1c1c1' }}>
                012536
              </Text>
            </View>
            <View
              style={{
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 25, fontWeight: '100' }}>
                How is your trip ?
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '100' }}>
                Your feedback will help us to improve
              </Text>
            </View>
            <View style={styles.reviewStyle}>
              <AirbnbRating
                count={5}
                reviews={[
                  'Terrible',
                  'Average',
                  'Fair',
                  'Very Good',
                  'Awesome',
                ]}
                size={20}
              />
            </View>
            <View style={styles.inputContainerStyle}>
              <TextInput
                multiline={true}
                placeholder="Enter Comments"
                style={styles.txtInput}></TextInput>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.Btnstyle}>
            <Text style={{ color: '#fff', fontSize: 15 }}>Submit Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Feedback;
