import React, { Component } from 'react';
import { Text, View, Image, } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { CardHeader, CardSection } from '../../Components/Card2/common';
import { styles } from './Stylesheet';
class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <CardHeader>
                        <Image style={styles.imagestyle} source={require('../../assets/Images/boy.png')} />
                        <View style={styles.headerContentStyle}>
                            <Text >
                                Esther Berry
                        </Text>
                            <Text style={{ color: '#fff', backgroundColor: '#ea0788', borderRadius: 25, alignSelf: 'flex-start', fontSize: 12, fontWeight: 'bold', paddingHorizontal: 6, paddingVertical: 4, margin: 2, }}>City</Text>
                        </View>
                        <View style={styles.tripAmountStyle}>
                            <Text>25</Text>
                            <Text style={{ color: '#EA0788', fontWeight: 'bold' }}>2.2 Km</Text>
                        </View>
                    </CardHeader>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={{ color: '#EA0788', fontWeight: 'bold' }}>
                                PICK UP
                        </Text>
                            <View style={styles.headerContentStyle}>
                                <Text>
                                    7895 SWift Village
                            </Text>
                            </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={{ color: '#EA0788', fontWeight: 'bold' }}>
                                DROP OFF
                        </Text>
                            <View style={styles.headerContentStyle}>
                                <Text>
                                    7895 marathali Bridge
                            </Text>
                            </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={{ color: '#EA0788', fontWeight: 'bold' }}>
                                NOTES
                        </Text>
                            <View style={styles.headerContentStyle}>
                                <Text>
                                    Javascript Tutorials. Modern Functional Javascript topics like Pure Functional Programming, Asynchronous Programming, Promise, Closure, Higher Order Functions.
                            </Text>
                            </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.headerContentStyle}>
                            <Text style={{ color: '#EA0788', fontWeight: 'bold' }}>
                                TRIP RATE
                        </Text>
                            <View style={styles.tripStyle}>
                                <View style={styles.headerContentStyle} >
                                    <Text>TRIP CHARGES</Text>
                                    <Text>TAXES & CHARGES</Text>
                                    <Text>TOTAL PAID</Text>
                                </View>
                                <View style={styles.tripAmountStyle} >
                                    <Text>₹ 100</Text>
                                    <Text>₹ 20</Text>
                                    <Text>₹ 120</Text>
                                </View>
                            </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.reviewStyle}>
                            <AirbnbRating
                                count={5}
                                reviews={['Terrible', 'Average', 'Fair', 'Very Good', 'Awesome']}
                                size={20}
                                selectedColor={'#ea0788'}
                                reviewColor={'#ea0788'}
                                isDisabled
                            />
                            <View style={{ margin: 10 }}>
                                <Text style={{ color: '#EA0788', fontWeight: 'bold', }}>
                                    Feedback
                                </Text>
                                <Text>Comments given by the customer when the rating is given. Lorem ipsum dolor amet</Text>
                            </View>
                        </View>
                    </CardSection>
                </View>
            </View>
        );
    }
}
export default Notification;

