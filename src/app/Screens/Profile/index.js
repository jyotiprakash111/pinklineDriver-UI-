/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { CardSection } from '../../Components/Card2/common';
import { styles } from './Stylesheet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../../Redux/Actions/CounterAction';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'My Profile',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 70,
        },
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('EditAcInffo')}
                style={{ marginRight: 10 }}>
                <Text style={{ color: '#ea0788', fontSize: 15, fontWeight: '800' }}>Edit</Text>
            </TouchableOpacity>
        ),
    });
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    async componentDidMount() {

        alert(JSON.stringify(this.props.user))
        this.setState({
            user: this.props.user.user
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    {/* <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('EditAcInffo', {
                            user: this.props.user.user
                        })}
                        style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text style={{ color: '#ea0788', fontSize: 15 }}>Edit</Text>
                    </TouchableOpacity> */}
                    <Image style={styles.imageStyle2} source={require('../../assets/Images/boy.png')} />
                    <Text style={styles.nameStyle}>
                        {this.state.user.name}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.bookingTypeStyle}>City</Text>
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
                            <Text>Phone Number</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>{this.state.user.mobile}</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Email</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>{this.state.user.email}</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Gender</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>{this.state.user.gender}</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.profileContentContainerStyle}>
                        <View style={styles.profileContentStyle}>
                            <Text>Date of Birth</Text>
                        </View>
                        <View style={styles.profileContentStyle2}>
                            <Text style={styles.profileContentValueStyle}>{this.state.user.dob}</Text>
                        </View>
                    </View>
                </CardSection>
            </ScrollView>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps)(Profile)
