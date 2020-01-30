import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { CardSection } from '../../Components/Card2/common';
import { styles } from './stylesheet';

class EditAccount extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={{ flexDirection: 'column', width: '40%', alignItems: 'center' }}>
                        <Image style={styles.imageStyle2} source={require('../../assets/Images/boy.png')} />
                        <TouchableOpacity>
                            <Text style={styles.buttonStyle}>
                                Edit Photo
                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', width: '60%', alignItems: 'center', }}>
                        <TextInput
                            style={styles.nameTypeStyle}
                            placeholder='Enter Full Name'
                            textContentType='name'
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
                                placeholder='Enter Phone Number'
                                keyboardType='phone-pad'
                                maxLength={10}
                                textContentType='telephoneNumber'
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
                                placeholder='Enter Email'
                                keyboardType='email-address'
                                textContentType='emailAddress'
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
                                mode='dropdown'
                                style={{ height: 40, width: 170, color: '#c1c1c1', }}
                            >
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
                                onDateChange={(date) => { this.setState({ date }); }}
                            />
                        </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

export default EditAccount;
