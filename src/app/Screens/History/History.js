
import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { CardSection, CardHeader } from './../../Components/Card2/common';
import { styles } from './Stylesheet';

class History extends Component {
    static navigationOptions = {
        title: 'History',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 130,
        },
    };
    updatePicker = (user) => {
        this.setState({ item: user })
    }
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            date2: ''
        };
    };

    keyExtractor = (item, index) => index.toString()
    renderHistory = ({ item }) => (
        <View style={styles.card}>
            <CardHeader>
                <View style={{ flexDirection: 'row', width: '15%' }}>
                    <Image style={styles.imagestyle} source={item.image} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text >
                        {item.name}
                    </Text>
                    <Text style={{ color: '#fff', backgroundColor: '#ea0788', borderRadius: 25, alignSelf: 'flex-start', fontSize: 12, fontWeight: 'bold', paddingHorizontal: 6, paddingVertical: 4, margin: 2, }}>
                        {item.booktype}
                    </Text>
                </View>
                <View style={styles.tripAmountStyle}>
                    <Text>₹ {item.fare}</Text>
                    <Text style={{ color: '#EA0788', fontWeight: 'bold', }}>{item.km} Km</Text>
                </View>
            </CardHeader>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={{ color: '#EA0788', fontWeight: 'bold' }}>
                        PICK UP
                                </Text>
                    <View style={styles.headerContentStyle}>
                        <Text>
                            {item.pickup}
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
                            {item.drop}
                        </Text>
                    </View>
                </View>
            </CardSection>
        </View>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.historycontainer}>
                        <Picker
                            mode='dropdown'
                            selectedValue={this.state.item}
                            onValueChange={this.updatePicker}
                        >
                            <Picker.Item label="Select Booking Type" value="all" />
                            <Picker.Item label="City" value="city" />
                            <Picker.Item label="Rental" value="rental" />
                            <Picker.Item label="Outstation" value="outstation" />
                        </Picker>
                    </View>
                    <View style={styles.dateContainer}>
                        <DatePicker
                            date={this.state.date}
                            mode="date"
                            placeholder="From Date"
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
                                    marginTop: 10,
                                    borderWidth: 0,
                                    color: '#000',
                                },
                                placeholderText: {
                                    color: '#000',
                                },
                                dateText: {
                                    color: '#000',
                                },
                            }}
                            onDateChange={(date) => { this.setState({ date }); }}
                        />
                        <DatePicker
                            date={this.state.date2}
                            mode="date"
                            placeholder="To Date"
                            format="DD-MM-YYYY"
                            // minDate="2019-02-01"
                            // maxDate="2020-06-01"
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
                                    color: '#000',
                                },
                                dateText: {
                                    color: '#000',
                                },
                            }}
                            onDateChange={(date2) => { this.setState({ date2 }); }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                    <View style={styles.btncontiner}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={styles.imagestyle} source={require('../../assets/Images/taxi-front-view.png')} />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                                <Text style={{ color: '#fff' }}>Total Jobs</Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btncontiner2}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={styles.imagestyle} source={require('../../assets/Images/rupee.png')} />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5, }}>
                                <Text style={{ color: '#fff' }}>Total Earned</Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>10</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={this.keyExtractor}
                        data={history}
                        renderItem={this.renderHistory}
                    />
                </View>
            </View>

        );
    }
}

export default History;

const history = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../../assets/Images/boy.png'),
        name: 'Esther Berry',
        booktype: 'City',
        fare: '225',
        km: '4.6',
        pickup: '7895 SWift Village',
        drop: '7895 marathali Bridge'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: require('../../assets/Images/boy.png'),
        name: 'Vipin Kumar',
        booktype: 'Rental',
        fare: '3000',
        km: '50',
        pickup: '7895 SWift Village',
        drop: '7895 marathali Bridge'

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        image: require('../../assets/Images/boy.png'),
        name: 'JyotiPrakash',
        booktype: 'Outstation',
        fare: '10000',
        km: '400',
        pickup: '7895 SWift Village',
        drop: '7895 marathali Bridge'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        image: require('../../assets/Images/boy.png'),
        name: 'Allan Joseph',
        booktype: 'City',
        fare: '560',
        km: '12',
        pickup: 'RT Nagar',
        drop: '7895 marathali Bridge'

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        image: require('../../assets/Images/boy.png'),
        name: 'Chandan Jaiswal',
        booktype: 'City',
        fare: '450',
        km: '8.6',
        pickup: 'BTM Layout',
        drop: '7895 marathali Bridge'
    },
];
