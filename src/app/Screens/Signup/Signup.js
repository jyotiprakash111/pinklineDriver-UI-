import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Stylesheet';


class Signup extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mobile: '',
    };
  }
  SignUpuser() {
    const {  email, mobile } = this.state
    // alert(data)
    this.props.navigation.navigate('EditProfileDetails', {
      email,
      mobile
    })

  }
  

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={['#f368e0', '#ea0788']} style={styles.wrapper}>
          <Text style={styles.textcontainer}>Signup with your</Text>
          <View>
            <Text style={{marginLeft: '7%', fontSize: 25, color: '#fff'}}>
              email and phone number
            </Text>
          </View>
          <View>
            <Image
              style={{
                height: 150,
                width: '100%',
                overflow: 'hidden',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                marginTop: 5,
                resizeMode: 'cover',
              }}
              source={require('../../assets/SplashFooter.png')}
            />
          </View>
        </LinearGradient>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            height: 50,
            marginTop: 10,
            width: '100%',
            borderWidth: 1,
            borderColor: '#d8d8d8',
          }}>
          <TextInput
            keyboardType="email-address"
            placeholder="name@example.com"
            style={{marginLeft: 5}}
            onChangeText={(email)=>this.setState({email})}
          />
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            marginTop: 10,
            height: 50,
            width: '100%',
            borderWidth: 1,
            borderColor: '#d8d8d8',
          }}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Mobile number"
            style={{marginLeft: 5}}
            onChangeText={(mobile)=>this.setState({mobile})}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.SignUpuser()}
            style={styles.btncontainer}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '800'}}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{paddingTop: 60}}>Already have an account? Signin</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default Signup;
