import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {CardSection} from '../../Components/Card2/common';
import {styles} from './Stylesheet';
import {userUpload} from '../../Redux/Actions/CounterAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
class EditAccount extends Component {
  static navigationOptions = {
    header: null,
  };
  updateUser = user => {
    this.setState({gender: user});
  };
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      name: '',
      password: '',
      dob: '',
      gender: '',
      mobile: '',
      email: '',
    };
  }
  componentDidMount() {
    var email = this.props.navigation.getParam('email');
    var mobile = this.props.navigation.getParam('mobile');
    this.setState({
      email,
      mobile,
    });
  }
  async signUp() {
    const {email, name, gender, dob, mobile} = this.state;
    var notifID=await AsyncStorage.getItem('@token')
    alert(notifID)
    var data = {
      email,
      name,
      gender,
      dob,
      mobile,
      notifID
    };
    this.props
      .userUpload(data)
      .then(resp => {
        if (resp.message === 'registered') {
          this.props.navigation.navigate('Home');
        } else {
        }
      })
      .catch(err => {
        alert(err);
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View
            style={{
              flexDirection: 'column',
              width: '40%',
              alignItems: 'center',
            }}>
            <Image
              style={styles.imageStyle2}
              source={require('../../assets/Images/boy.png')}
            />
            <TouchableOpacity>
              <Text style={styles.buttonStyle}>Edit Photo</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: '60%',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.nameTypeStyle}
              placeholder="Enter Full Name"
              textContentType="name"
              onChangeText={name => this.setState({name})}
            />
          </View>
        </View>
        <CardSection>
          <View style={styles.profileContentContainerStyle}>
            <View style={styles.profileContentStyle}>
              <Text>Gender</Text>
            </View>
            <View style={styles.profileContentStyle2}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={this.updateUser}
                mode="dropdown"
                style={{height: 40, width: 170, color: '#c1c1c1'}}>
                <Picker.Item label="Select Gender" value="none" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.profileContentContainerStyle}>
            <View style={styles.profileContentStyle}>
              <Text>Date of Birth</Text>
            </View>
            <View style={styles.profileContentStyle2}>
              <DatePicker
                // date={this.state.date}
                mode="date"
                placeholder="Select Date"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 2,
                  },
                  dateInput: {
                    marginLeft: 30,
                    borderWidth: 0,
                    color: '#000',
                  },
                  placeholderText: {
                    color: '#c1c1c1',
                  },
                  dateText: {
                    color: '#000',
                  },
                }}
                onDateChange={dob => {
                  this.setState({dob});
                }}
              />
            </View>
          </View>
        </CardSection>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => this.signUp()}
            style={styles.SaveBtn}>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: 15,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

EditAccount.propTypes = {
  userUpload: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  {userUpload},
)(EditAccount);
