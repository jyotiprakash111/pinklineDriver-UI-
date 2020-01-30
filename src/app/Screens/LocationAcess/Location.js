import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  StatusBar
} from 'react-native'


export class Location extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <StatusBar backgroundColor="#000" barStyle="dark-content" />
        <Image source={require('../../assets/EnableLocation.png')} style={{ height: 250, width: 255, marginBottom: 10 }} />
        <View style={{ marginBottom: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#000', fontWeight: '600', marginBottom: 30 }}>Enable Your Location</Text>
          <Text style={{ fontSize: 15, color: '#000', fontWeight: '600' }}>Choose your location to start find</Text>
        </View>
        <View style={{marginTop: 10}}>
          <TouchableOpacity style={{ backgroundColor: '#ea0788', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, }}
            onPress={() => this.requestLocationPermission()}>
            <Text style={styles.btntext}>Enable Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Pinkline Driver App Location Permission',
        message:
          'Pinkline DriverApp needs access to your Location ' +
          'so you can start trip',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}


const styles = StyleSheet.create({
  btntext: {
    textAlign: 'center',
    // fontFamily:'',
    fontSize: 18,
    color: '#fff',
    borderRadius: 20
  }
});


export default Location;