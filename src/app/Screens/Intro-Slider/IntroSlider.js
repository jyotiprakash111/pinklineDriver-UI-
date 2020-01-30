import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from '../Login/Login';

export default class Introslider extends React.Component {

  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  onDone = () => {
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Login')
  };
  onSkip = () => {
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Location')
  };
  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this.renderItem}
          onDone={this.onDone}
          showSkipButton={true}
          onSkip={this.onSkip}
          activeDotStyle={{ backgroundColor: "#ea0788" }}
          buttonTextStyle={{ color: "#ea0788" }}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 255,
    height: 250,
  },
  text: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Accept incoming trips from customer',
    title: 'Accept a Job ',
    image: require('../../assets/AcceptJobs.png'),
    backgroundColor: '#FFF',
  },
  {
    key: 's2',
    title: 'Tracking Realtime',
    text: 'Track your jobs realtime',
    image: require('../../assets/TrackingRealtime.png'),
    backgroundColor: '#fff',
  },
  {
    key: 's3',
    title: 'Earn Money',
    text: 'Get paid after completing rides',
    image: require('../../assets/EarnMoney.png'),
    backgroundColor: '#fff',
  },
];