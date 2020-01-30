/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { CardSection } from '../../Components/Card2/common';
import {styles} from './Stylesheet';

class MyAccount extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.wrapper}>
                    <Image style={styles.imageStyle2} source={require('../../assets/Images/boy.png')} />
                    <Text style={styles.nameStyle}>
                        Allan Joseph   
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.bookingTypeStyle}>
                        City
                    </Text>
                    </View>                         
                </View>
                <View>
                    <Text style={styles.profileInfoStyle}>
                        PROFILE INFO
                    </Text>
                </View>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                    <View style={styles.profileContentStyle}>
                        <Text>Name</Text>
                    </View>
                    <View style={styles.profileContentStyle2}>
                    <Text style={styles.profileContentValueStyle}>Allan Joseph</Text>
                    </View>
                    </View>
                </CardSection>           
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                    <View style={styles.profileContentStyle}>
                        <Text>Phone Number</Text>
                    </View>
                    <View style={styles.profileContentStyle2}>
                    <Text style={styles.profileContentValueStyle}>+91-XXX-XXX-XXXX</Text>
                    </View>
                    </View>
                    </CardSection>           
                <CardSection>
                <View style={styles.profileContentContainerStyle}>
                    <View style={styles.profileContentStyle}>
                        <Text>Email</Text>
                    </View>
                    <View style={styles.profileContentStyle2}>
                    <Text style={styles.profileContentValueStyle}>name@example.com</Text>
                    </View>
                    </View>
                    </CardSection>           
                 <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                    <View style={styles.profileContentStyle}>
                        <Text>Gender</Text>
                    </View>
                    <View style={styles.profileContentStyle2}>
                    <Text style={styles.profileContentValueStyle}>Male</Text>
                    </View>
                    </View>
                    </CardSection>           
                <CardSection>
                <View style={styles.profileContentContainerStyle}>
                    <View style={styles.profileContentStyle}>
                        <Text>Date of Birth</Text>
                    </View>
                    <View style={styles.profileContentStyle2}>
                    <Text style={styles.profileContentValueStyle}>24-08-1995</Text>
                    </View>
                    </View>
                </CardSection>           
            </View>
        );
    }
}
export default MyAccount;
