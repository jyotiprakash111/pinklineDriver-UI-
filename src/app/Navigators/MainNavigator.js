import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Home from '../Screens/Home';
import History from '../Screens/History/History';
import SignUpScreen from '../Screens/Signup/Signup';
import SplashScreen from '../Screens/splash/splash';
import Introslider from '../Screens/Intro-Slider/IntroSlider';
import Locationgps from '../Screens/LocationAcess/Location';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screens/Login/Login';
import MyWallet from '../Screens/MyWallet';
import PaymentMethod from '../Screens/PaymentMethod';
import Notification from '../Screens/Notifications';
import Myaccount from '../Screens/Profile';
import AddBankAc from '../Screens/AddbankAccount';
import AddDocument from '../Screens/Add_Document';
import DriverDetails from '../Screens/AddDriverDetails';
import EditProfile from '../Screens/EditProfile';
import BookingDetails from '../Components/Booking_Details';
import InviteFriends from '../Screens/Invite_Friends';
import Setting from '../Screens/Setting';
import VeichleManagement from '../Screens/VeichleManagement';
import AddVeichle from '../Screens/AddVehicle';
import Documentmgt from '../Screens/Document_Management';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import OtpVerification from '../Screens/OTPVerification';
import firebase from 'react-native-firebase';
import { onNotification } from '../Redux/Actions/NotificationAction'
//Drawer Navigation
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <View style={styles.container}>
      <LinearGradient
        colors={['#f368e0', '#ea0788']}
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 200,
          backgroundColor: '#f39c12',
        }}>
        <Image
          source={require('../assets/Images/boy.png')}
          style={styles.imgstyle}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              marginTop: 65,
              color: '#fff',
              fontSize: 15,
              fontWeight: '600',
              marginLeft: 10,
            }}>
            Vipin (example)
            {/* {props} */}
          </Text>
        </View>
      </LinearGradient>
      {/* <Text style={{marginTop:65, color:'#fff', fontSize:15, fontWeight:'600', marginLeft:10}}>Bikash Kumar</Text> */}
      <DrawerNavigatorItems  {...props} />
    </View>
  </ScrollView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:"95%"
  },
  imgstyle: {
    marginTop: 50,
    marginLeft: 30,
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
});

// Signup Navigation
// Wallet Navigation

const PaymentStack = createStackNavigator(
  {
    Mywallet: {
      screen: MyWallet,
    },
    Payment: {
      screen: PaymentMethod,
    },
    Addbank: {
      screen: AddBankAc,
    },
  },
  {
    initialRouteName: 'Mywallet',
  },
);
// Setting Navigation

const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: Setting,
    },
    MyAccount: {
      screen: Myaccount,
    },
    VeichleMgt: {
      screen: VeichleManagement,
    },
    DocumentMgt: {
      screen: Documentmgt,
    },
    EditAcInffo: {
      screen: EditProfile,
    },
    AddDocument: {
      screen: AddDocument,
    },
    Addveichle: {
      screen: AddVeichle,
    },
  },
  {
    initialRouteName: 'Setting',
  },
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        // drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color="#000" />
        ),
      },
    },
    Mywallet: {
      screen: PaymentStack,
      navigationOptions: {
        drawerLabel: 'My wallet',
        drawerIcon: ({ tintColor }) => (
          <IconMaterial name="account-balance-wallet" size={20} color="#000" />
        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        // drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (
          <Icon name="history" size={20} color="#000" />
        ),
      },
    },
    Notifications: {
      screen: Notification,
      navigationOptions: {
        // drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (
          <IconMaterial name="notifications-active" size={20} color="#000" />
        ),
      },
    },
    Invitefriends: {
      screen: InviteFriends,
      navigationOptions: {
        drawerLabel: 'Invite Friends',
        drawerIcon: ({ tintColor }) => (
          <Icon2 name="addusergroup" size={20} color="#000" />
        ),
      },
    },
    Setting: {
      screen: SettingStack,
      navigationOptions: {
        // drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (
          <Icon name="gear" size={20} color="#000" />
        ),
      },
    },

    // VehicalManage:{
    //   screen:VeichleManagement
    // }
  },
  {
    contentComponent: CustomDrawerContentComponent,
    // drawerLockMode:false,
    // minSwipeDistance: 200,
  },
);

//Stack Navigation
const LoginStack = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    Intro: {
      screen: Introslider,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignUpScreen,
    },
    EditProfileDetails: {
      screen: DriverDetails,
    },
    Location: {
      screen: Locationgps,
    },
    OtpVerify: {
      screen: OtpVerification
    }
  },
  {
    initialRouteName: 'splash',
  },
);

//Switch Navigation before login

const SwitchNavigation = createSwitchNavigator(
  {
    Login: LoginStack,
    Drawer: MyDrawerNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);
//Switch Navigation after login
const SwitchNavigation2 = createSwitchNavigator(
  {
    Login: LoginStack,
    Drawer: MyDrawerNavigator,
  },
  {
    initialRouteName: 'Drawer',
  },
);

const MyApp = createAppContainer(SwitchNavigation);
const MyApp2 = createAppContainer(SwitchNavigation2);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authcheck: false,
    };
  }
  async componentDidMount() {
    const value = await AsyncStorage.getItem('@login');
    if (value !== null) {
      // value previously stored
      this.setState({
        authcheck: true,
      });
    }
    try {
      await firebase.messaging().requestPermission();
      // user has authorised
      this.listenNoti();
    } catch (error) {
      //  user has rejected permissions
    }
  }

  async listenNoti() {
    await firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // alert(fcmtoken);
          AsyncStorage.setItem('@token', fcmToken);
        } else {
          console.log("no token");
        }
      });

    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          console.log('ok')
          this.notificationListener = firebase
            .notifications()
            .onNotification(notification => {
              const { title, body } = notification;
              // console.log('oklogf');
              // Alert.alert(title, body);
              this.props.onNotification()
            });
        } else {
          console.log('not ok');
        }
      });
    var notificationOpen = firebase.notifications().getInitialNotification();

    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        //const { title, body } = notificationOpen.notification;
        // this.props.navigation.navigate("MeetingsTab");
      });

    if (notificationOpen) {
      // const { title, body } = notificationOpen.notification;
      // this.showAlert(title, body);
      // var title = "Hi Admin !";
      // var body = "You Have got a lead ";
      // // this.showAlert(title, body);
      // this.renderNoti(title, body);
    }
    this.messageListener = firebase.messaging().onMessage(message => {
      //process data message
      // console.log(JSON.stringify(message));
      alert("ok");
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.authcheck ? <MyApp2 /> : <MyApp />}
      </View>
    );
  }
}

App.propTypes = {
  onNotification: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { onNotification })(App, CustomDrawerContentComponent);
