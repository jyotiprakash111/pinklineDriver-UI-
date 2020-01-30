import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Stylesheet';
import firebase from 'react-native-firebase';
import OtpVerification from '../OTPVerification';
import { login } from '../../Redux/Actions/CounterAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      mobile: 0,
      otpsent: false,
      confirmResult: 0,
    };
  }

  render() {
    if (!this.state.otpsent) {
      return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {/* <View style={{ height: 220, width: '100%', backgroundColor: '#ea0788' }}> */}
          <LinearGradient
            colors={['#f368e0', '#ea0788']}
            style={{ height: 220, width: '100%' }}
          //  locations={[0,0.5,0.5]}
          >
            <Image
              style={{
                height: 200,
                width: '100%',
                overflow: 'hidden',
                marginTop: 20,
              }}
              source={require('../../assets/SplashFooter.png')}
            />
          </LinearGradient>
          <View style={styles.card}>
            {/* <BoxShadow setting={shadowOpt}> */}
            <Text style={{ fontSize: 25, color: '#000' }}>Enter your</Text>
            <Text style={{ fontSize: 25, color: '#000', paddingBottom: 20 }}>
              Phone Number
            </Text>
            <View
              style={{
                borderRadius: 10,
                height: 50,
                width: '90%',
                borderWidth: 1,
                borderColor: '#c1c1c1',
              }}>
              <TextInput
                keyboardType="phone-pad"
                placeholder="Mobile Number"
                textContentType="telephoneNumber"
                onChangeText={mobile =>
                  this.setState({
                    mobile,
                  })
                }
                style={{ marginLeft: 5 }}></TextInput>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.btncontainer}
                onPress={() => this.loginLocal()}>
                <Text
                  style={{
                    marginTop: 15,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: '800',
                  }}>
                  LOGIN
                </Text>
                <Text></Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </BoxShadow> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ paddingTop: 60 }}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      return (
        <OtpVerification
          navigation={this.props.navigation}
          confirmResult={this.state.confirmResult}
        />
      );
    }
  }
  async loginLocal() {
    var data = {
      mobile: this.state.mobile,
    };
    await this.props
      .login(data)
      .then(resp => {
        if (resp.message === 'Success') {
          this.login2();
        }
      })
      .catch(err => {
        alert('Something Went Wrong');
      });

    // this.props.navigation.navigate('Drawer')
  }
  login2() {
    var phone = '+91' + this.state.mobile;
    firebase
      .auth()
      .signInWithPhoneNumber(phone)
      .then(confirmResult => {
        console.log(confirmResult);
        this.setState({ confirmResult, otpsent: true });
        this.login();
      })
      .catch(error => {
        const { code, message } = error;
        alert(JSON.stringify(message));
      });
  }

  login() {
    // this.props.navigation.navigate('Drawer')
    var phone = '+91' + this.state.mobile;
    firebase
      .auth()
      .verifyPhoneNumber(phone)
      .on(
        'state_changed',
        phoneAuthSnapshot => {
          console.log(phoneAuthSnapshot);
          switch (phoneAuthSnapshot.state) {
            // ------------------------
            //  IOS AND ANDROID EVENTS
            // ------------------------
            case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
              this.setState({
                otpsent: true,
              });

              break;
            case firebase.auth.PhoneAuthState.ERROR: // or 'error'
              alert('verification error');
              alert(phoneAuthSnapshot.error);
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
              // alert('auto verify on android timed out');
              // alert(JSON.stringify(phoneAuthSnapshot));

              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
              this.props.navigation.navigate('Drawer');
              break;
          }
        },
        error => {
          alert(error);

          alert(error.verificationId);
        },
        phoneAuthSnapshot => {
          // optionalCompleteCb would be same logic as the AUTO_VERIFIED/CODE_SENT switch cases above
          // depending on the platform. If you've already handled those cases in the observer then
          // there's absolutely no need to handle it here.
          // Platform specific logic:
          // - if this is on IOS then phoneAuthSnapshot.code will always be null
          // - if ANDROID auto verified the sms code then phoneAuthSnapshot.code will contain the verified sms code
          //   and there'd be no need to ask for user input of the code - proceed to credential creating logic
          // - if ANDROID auto verify timed out then phoneAuthSnapshot.code would be null, just like ios, you'd
          //   continue with user input logic.
          // alert(JSON.stringify(phoneAuthSnapshot));
        },
      );
    // optionally also supports .then & .catch instead of optionalErrorCb &
    // optionalCompleteCb (with the same resulting args)
  }
}
const mapStataeToProps = state => ({
  user: state.user,
});
Login.propTypes = {
  auth: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
};
export default connect(
  mapStataeToProps,
  { login },
)(Login);
