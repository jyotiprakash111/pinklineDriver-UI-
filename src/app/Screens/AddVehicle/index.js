import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MultiSelect from 'react-native-multiple-select';
import { styles } from './Stylesheet';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { CabUpload, CabDetails } from '../../Redux/Actions/CounterAction';
import AsyncStorage from '@react-native-community/async-storage';
const items = [
    {
        id: 'nahs75a5sg',
        name: 'City - Auto',
    }, {
        id: 'nahs75a6sg',
        name: 'City - Micro',
    },
    {
        id: 'nahs75a7sg',
        name: 'City - Mini',
    },
    {
        id: 'nahs75a8sg',
        name: 'City - PrimeSedan',
    },
    {
        id: 'nahs75a9sg',
        name: 'City - PrimeSUV',
    },
    {
        id: 'sdhyay10dj',
        name: 'Rental',
    }, {
        id: 'suudydjs10jd',
        name: 'Outstation',
    }];


class AddVehicle extends Component {
    static navigationOptions = {
        title: 'Add Vehicle',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 80,
        },
    };

    state = {
        selectedItems: [],
        date: '2016-05-15',
        cab_brand: '',
        model: '',
        year: '',
        license_plate: '',
        cab_color: '',
        seater: '',
        bookingType: {
            city: true,
            outstation: true,
            rental: false
        },
        latitude: 13.256874623,
        longitude: 172.15236448,
        userid: ''
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });

    }
    async AddCab() {
        var userid = await AsyncStorage.getItem('@login')
        const { cab_brand, model, year, license_plate, cab_color, seater, bookingType, latitude, longitude } = this.state
        var data = {
            cab_brand, model, year, license_plate, cab_color, seater, bookingType, latitude, longitude, userid
        }
        // alert(JSON.stringify(data))
        this.props.CabUpload(data).then((resp) => {
            this.props.CabDetails(data)
            this.props.navigation.goBack()
        }).catch((err) => {

        })

    }
    render() {
        const { selectedItems } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView
                    // style={{ marginVertical: 25 }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.labelStyle}>VEHICLE BRAND</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Suzuki, Toyota..."
                            style={styles.txtInput}
                            onChangeText={(cab_brand) => this.setState({ cab_brand })}
                        />
                    </View>
                    <Text style={styles.labelStyle}>MODEL</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Enter Model"
                            style={styles.txtInput}
                            onChangeText={(model) => this.setState({ model })}
                        />
                    </View>
                    <Text style={styles.labelStyle}>YEAR</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Enter Year"
                            style={styles.txtInput}
                            onChangeText={(year) => this.setState({ year })}

                        />
                    </View>
                    <Text style={styles.labelStyle}>LICENCE PLATE</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Licence Plate No"
                            style={styles.txtInput}
                            onChangeText={(license_plate) => this.setState({ license_plate })}
                        />
                    </View>
                    <Text style={styles.labelStyle}>COLOR</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Vehicle Color"
                            style={styles.txtInput}
                            onChangeText={(cab_color) => this.setState({ cab_color })}
                        />
                    </View>
                    <Text style={styles.labelStyle}>SEATER</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            keyboardType="number-pad"
                            placeholder="No of seats"
                            style={styles.txtInput}
                            onChangeText={(seater) => this.setState({ seater })}
                        />
                    </View>
                    <Text style={styles.labelStyle}>BOOKING TYPE</Text>
                    <View style={styles.multipleInputContainerStyle}>
                        <MultiSelect
                            hideTags
                            items={items}
                            uniqueKey="id"
                            ref={(component) => { this.multiSelect = component; }}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={selectedItems}
                            // selectText="City, Rental or Outstation"
                            searchInputPlaceholderText="Search..."
                            onChangeInput={(bookingType) => this.setState({ bookingType })}
                            altFontFamily="ProximaNova-Light"
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#CCC"
                            tagTextColor="#CCC"
                            selectedItemTextColor="#ea0788"
                            selectedItemIconColor="#ea0788"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#2980b9', width: '90%' }}
                            submitButtonColor="#ea0788"
                            submitButtonText="Submit"
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.completeButtonStyle}
                    onPress={() => this.AddCab()}>
                    <LinearGradient
                        colors={['#fd79a8', '#ea0788']}
                        style={styles.completeButtonStyle}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>SUBMIT</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View >
        );
    }
}
const mapStateToProps = state => ({

    cabs: state.cabs

})
AddVehicle.propTypes = {
    CabUpload: PropTypes.func.isRequired,
    CabDetails: PropTypes.func.isRequired,
    cabs: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, { CabUpload, CabDetails })(AddVehicle)

