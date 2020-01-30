import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native';
import {styles} from './Stylesheet';

class InviteFriends extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Image
              style={styles.imgStyle}
              source={require('./../../assets/Icons/invite.png')}
            />
          </View>
          <View>
            <Text style={styles.txtstyle}>Invite Friends</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.txtStyle2}>
              When your friend sign up with your referral code, you can receive
              up to ₹300 .
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={styles.txtStyle2}>Share Your Invite Code</Text>
          </View>
          <View style={styles.txtinput}>
            <Text>AACQA7332</Text>
          </View>
          <TouchableOpacity style={styles.btncontainer}>
            <Text style={styles.inviteTxt}>Invite</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
export default InviteFriends;
