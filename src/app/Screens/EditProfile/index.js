import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
  Button
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { CardSection } from '../../Components/Card2/common';
import { styles } from './Stylesheet';
import { editProfile } from '../../Redux/Actions/CounterAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EditAccount extends Component {
  static navigationOptions = {
    title: 'Edit Profile',
    headerStyle: {
      // backgroundColor: '#f4511e',
    },
    headerTintColor: '#ea0788',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: 70,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
    };
  }
  componentDidMount() {
    // var user = this.props.navigation.getParam('user');
    const { name, mobile, email, gender, dob } = this.props.user.user;
    this.setState({
      name,
      mobile,
      email,
      gender,
      dob,
    });
  }
  edit() {

  }
  updateUser = user => {
    this.setState({ gender: user });
  };
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
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </View>
        </View>
        <CardSection>
          <View style={styles.profileContentContainerStyle}>
            <View style={styles.profileContentStyle}>
              <Text>Phone Number</Text>
            </View>
            <View style={styles.profileContentStyle2}>
              <TextInput
                style={styles.inputTypeStyle}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                maxLength={10}
                textContentType="telephoneNumber"
                value={this.state.mobile}
                onChangeText={mobile => this.setState({ mobile })}
              />
            </View>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.profileContentContainerStyle}>
            <View style={styles.profileContentStyle}>
              <Text>Email</Text>
            </View>
            <View style={styles.profileContentStyle2}>
              <TextInput
                style={styles.inputTypeStyle}
                placeholder="Enter Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
          </View>
        </CardSection>
        <CardSection>
          <View style={styles.profileContentContainerStyle}>
            <View style={styles.profileContentStyle}>
              <Text>Gender</Text>
            </View>
            <View style={styles.profileContentStyle2}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.gender}
                onValueChange={this.updateUser}
                style={{ height: 40, width: 170, color: '#c1c1c1' }}>
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
                // minDate="2019-12-01"
                // maxDate="2020-12-01"
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
                date={this.state.dob}
                onDateChange={dob => {
                  this.setState({ dob });
                }}
              />
            </View>
          </View>
        </CardSection>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            // onPress={() => this.props.navigation.navigate('Home')}
            style={styles.SaveBtn}>
            <Text style={styles.SaveTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStataeToProps = state => ({
  user: state.user,
});
EditAccount.propTypes = {
  editProfile: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
};
export default connect(
  mapStataeToProps,
  { editProfile },
)(EditAccount);

