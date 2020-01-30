import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Introslider from './src/app/Screens/Intro-Slider/IntroSlider';
import EnableLocation from './src/app/Screens/LocationAcess/Location';
import Signupscreen from './src/app/Screens/Signup/Signup';
import AddDriverDetail from './src/app/Screens/AddDriverDetails';
import Splash from './src/app/Screens/splash/splash';
import Login from './src/app/Screens/Login/Login';
import OtpVerification from './src/app/Screens/OTPVerification';
import OfflineNot from './src/app/Components/OfflineNotification/OfflineNotification';
import Mainavigator from './src/app/Navigators/MainNavigator';
import BookingDetails from './src/app/Components/Booking_Details/index';
import History from './src/app/Screens/History/History';
import HomeOnline from './src/app/Components/Home_Online_SwipeUp';
import Notification from './src/app/Screens/Notifications';
import HistoryDetails from './src/app/Screens/History_Details/index';
import Profile from './src/app/Screens/Profile';
import EditProfile from './src/app/Screens/EditProfile';
import Veichlemgt from './src/app/Screens/VeichleManagement';
import Mywallet from './src/app/Screens/MyWallet';
import Setting from './src/app/Screens/Setting';

import Addveichle from './src/app/Screens/AddVehicle';
import InviteFriends from './src/app/Screens/Invite_Friends';
import AddDocument from './src/app/Screens/Add_Document';
import PaymentMethod from './src/app/Screens/PaymentMethod';
import Feedback from './src/app/Screens/Feedback';
import AddbankAc from './src/app/Screens/AddbankAccount';
import Docmgt from './src/app/Screens/Document_Management';
import store from './src/app/Redux/Store/index';
import { Provider } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#ea0788" barStyle="light-content" />
        <Mainavigator />
      </Provider>
    );
  }
}
export default App;
