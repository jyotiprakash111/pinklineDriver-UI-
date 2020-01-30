/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './Stylesheet';
import { CardSection } from '../../Components/Card2/common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../../Redux/Actions/CounterAction';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
class Setting extends Component {
    static navigationOptions = {
        title: 'Setting',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 150,
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    async componentDidMount() {
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <CardSection>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MyAccount')}
                        activeOpacity={0.7}
                        style={styles.cardHeaderContainerStyle}>
                        <View style={styles.imageContainerStyle}>
                            <Image
                                style={styles.imageStyle}
                                source={require('../../assets/Images/boy.png')}
                            />
                        </View>
                        <Text style={styles.cardHeaderTextStyle}>{this.props.user.user.name}</Text>
                        <Icon
                            name="right"
                            color="#c1c1c1"
                            size={20}
                            style={styles.arrowStyle}
                        />
                    </TouchableOpacity>
                </CardSection>
                <View style={{ marginTop: 20 }}>
                    <CardSection>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('VeichleMgt')}
                            style={styles.cardBodyContainerStyle}>
                            <View style={styles.cardBodyImageContainerStyle}>
                                <View style={[styles.cardBodyImageWrapperStyle, { backgroundColor: '#e67e22' }]}>
                                    <Image style={styles.cardBodyImageStyle} source={require('../../assets/Images/car.png')} />
                                </View>
                            </View>
                            <Text style={styles.cardBodyTextStyle}>Vehicle Management</Text>
                            <Icon
                                name="right"
                                color="#c1c1c1"
                                size={16}
                                style={styles.arrowStyle}
                            />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DocumentMgt')}
                            style={styles.cardBodyContainerStyle}>
                            <View style={styles.cardBodyImageContainerStyle}>
                                <View style={[styles.cardBodyImageWrapperStyle, { backgroundColor: '#27ae60' }]}>
                                    <Image style={styles.cardBodyImageStyle} source={require('../../assets/Images/docx.png')} />
                                </View>
                            </View>
                            <Text style={styles.cardBodyTextStyle}>Document Management</Text>
                            <Icon
                                name="right"
                                color="#c1c1c1"
                                size={16}
                                style={styles.arrowStyle}
                            />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <View style={styles.cardBodyContainerStyle}>
                            <View style={styles.cardBodyImageContainerStyle}>
                                <View style={[styles.cardBodyImageWrapperStyle, { backgroundColor: '#f1c40f' }]}>
                                    <Image style={styles.cardBodyImageStyle} source={require('../../assets/Images/review.png')} />
                                </View>
                            </View>
                            <Text style={styles.cardBodyTextStyle}>Reviews</Text>
                            <Icon
                                name="right"
                                color="#c1c1c1"
                                size={16}
                                style={styles.arrowStyle}
                            />
                        </View>
                    </CardSection>
                </View>
                <View style={{ marginTop: 20 }}>
                    <CardSection>
                        <View style={styles.cardBodyContainerStyle}>
                            <View style={styles.cardBodyImageContainerStyle}>
                                <View style={[styles.cardBodyImageWrapperStyle, { backgroundColor: '#74b9ff', }]}>
                                    <Image style={styles.cardBodyImageStyle} source={require('../../assets/Images/notification.png')} />
                                </View>
                            </View>
                            <Text style={styles.cardBodyTextStyle}>Notifications</Text>
                            <Icon
                                name="right"
                                color="#c1c1c1"
                                size={16}
                                style={styles.arrowStyle}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.cardBodyContainerStyle}>
                            <View style={styles.cardBodyImageContainerStyle}>
                                <View style={[styles.cardBodyImageWrapperStyle, { backgroundColor: '#8395A7', }]}>
                                    <Image style={styles.cardBodyImageStyle} source={require('../../assets/Images/Privacy.png')} />
                                </View>
                            </View>
                            <Text style={styles.cardBodyTextStyle}>Terms & Privacy Policy</Text>
                            <Icon
                                name="right"
                                color="#c1c1c1"
                                size={16}
                                style={styles.arrowStyle}
                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.cardBodyContainerStyle}>
                            <View style={styles.cardBodyImageContainerStyle}>
                                <View style={[styles.cardBodyImageWrapperStyle, { backgroundColor: '#E71C23', }]}>
                                    <Image style={styles.cardBodyImageStyle} source={require('../../assets/Images/contact.png')} />
                                </View>
                            </View>
                            <Text style={styles.cardBodyTextStyle}>Contact us</Text>
                            <Icon
                                name="right"
                                color="#c1c1c1"
                                size={16}
                                style={styles.arrowStyle}
                            />
                        </View>
                    </CardSection>
                    {/* <View style={{
                        // flex: 1,
                        backgroundColor: '#ea0788',
                        height: 50,
                        width: 80,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}> */}
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10,
                        }}
                        onPress={() => this.logOut()}>
                        <Text style={{ color: '#c1c1c1', fontSize: 18, fontWeight: '300', padding: 8, }}>
                            Logout
                            </Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>
            </ScrollView>
        );
    }
    logOut = async () => {

        await AsyncStorage.clear()
        this.props.navigation.navigate('Login')
        await firebase.auth().signOut();
    }
}
const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps)(Setting);
