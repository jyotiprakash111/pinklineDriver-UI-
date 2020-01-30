import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MultiSelect from 'react-native-multiple-select';
import {styles} from './Stylesheet';
const items = [
    {
        id: 'nahs75a5sg',
        name: 'City',
    }, {
        id: 'sdhyaysdj',
        name: 'Rental',
    }, {
        id: 'suudydjsjd',
        name: 'Outstation',
    }];


class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = { date: '2016-05-15' };
    }
    state = {
        selectedItems: []
    };

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
        
    }
    render() {
        const { selectedItems } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView 
                style={{ marginVertical: 25 }}
                showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.labelStyle}>VEHICLE BRAND</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                        placeholder="Suzuki, Toyota..." 
                        style={styles.txtInput}
                        />
                    </View>
                    <Text style={styles.labelStyle}>MODEL</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput 
                        placeholder="Enter Model" 
                        style={styles.txtInput}
                        />
                    </View>
                    <Text style={styles.labelStyle}>YEAR</Text>
                    <View style={styles.inputContainerStyle}>
                    <TextInput 
                        placeholder="Enter Year" 
                        style={styles.txtInput}
                    />
                    </View>
                    <Text style={styles.labelStyle}>LICENCE PLATE</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput 
                        placeholder="Licence Plate No" 
                        style={styles.txtInput} 
                        />
                    </View>
                    <Text style={styles.labelStyle}>COLOR</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput 
                        placeholder="Vehicle Color" 
                        style={styles.txtInput} 
                        />
                    </View>
                    <Text style={styles.labelStyle}>SEATER</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                        keyboardType="number-pad"
                        placeholder="No of seats" 
                        style={styles.txtInput}
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
                            selectText="City, Rental or Outstation"
                            searchInputPlaceholderText="Search..."
                            onChangeInput={(text) => console.log(text)}
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
                <TouchableOpacity style={styles.completeButtonStyle}>
                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#fd79a8', '#e84393', '#ea0788']} style={styles.completeButtonStyle}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>SUBMIT</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View >
        );
    }
}

export default AddVehicle;