import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import { styles } from './Stylesheet';


class AddDocument extends Component {
    static navigationOptions = {
        title: 'Add Document',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: '20%',
        },
    };
    state = {
        photo: null,
        expdate: ''
    }
    OpenPicker = () => {
        const options = {};
        // ImagePicker.launchImageLibrary(options, response => {
        ImagePicker.launchCamera(options, (response) => {
            // Same code as in above section!
            console.log('response', response);
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.card}>
                        <Image
                            style={styles.imgstyle}
                            source={require('../../assets/Images/id-card.png')}
                        />
                        <TouchableOpacity onPress={this.OpenPicker} style={styles.Uploadbtn}>
                            <Text style={styles.Uploadtxt}>Upload Document</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.labelTextStyle}>NAME ON DOCUMENT</Text>
                    <View style={styles.items}>
                        <TextInput style={{ marginLeft: 10, }} placeholder="Name" />
                    </View>
                    <Text style={styles.labelTextStyle}>DOCUMENT ID NO</Text>
                    <View style={styles.items}>
                        <TextInput style={{ marginLeft: 10, }} placeholder="ID Number" />
                    </View>
                    <Text style={styles.labelTextStyle}>EXPIRATION DATE</Text>
                    <View style={styles.items}>
                        <DatePicker
                            date={this.state.expdate}
                            mode="date"
                            placeholder="Select Date"
                            // minDate="2019-01-01"
                            // maxDate="2021-06-01"
                            format="DD-MM-YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 2,
                                    top: 10,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 30,
                                    marginTop: 10,
                                    borderWidth: 0,
                                    color: '#000',
                                },
                                placeholderText: {
                                    color: '#BEC2CE',
                                },
                                dateText: {
                                    color: '#000',
                                },
                            }}
                            onDateChange={expdate => { this.setState({ expdate }); }}
                        />
                    </View>
                </ScrollView>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.completebtn}>
                        <LinearGradient
                            colors={['#fd79a8', '#ea0788']}
                            style={styles.linearGradientStyle}
                        >
                            <Text style={styles.linearGradientTextStyle}>SUBMIT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default AddDocument;
