import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Stylesheet';
import { CardSection } from '../../Components/Card2/common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotification } from '../../Redux/Actions/NotificationAction';
import AsyncStorage from '@react-native-community/async-storage';
import BookingDetails from '../../Components/Booking_Details';

function Item({ data }) {
    return (
        <CardSection>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '20%' }}>
                    <View style={styles.innerItem}>
                        <Icon
                            name={'bell'}
                            size={25}
                            color="#fff"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', width: '80%', justifyContent: 'center' }}>
                    <Text style={styles.title2}>{data.clientname}</Text>
                    <Text style={styles.title}>{data.price}</Text>
                </View>
            </View>
        </CardSection>
    );
}

class Notifications extends Component {
    static navigationOptions = {
        title: 'Notifications',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 130,
        },
    };
    constructor(props) {
        super(props);

        this.state = {
            tab: 2
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.tab === 2 ? <BookingDetails /> : <View></View>}
            </View>
        );
    }
}
const mapStataeToProps = state => ({
    notification: state.notification
});
Notifications.propTypes = {
    fetchNotification: PropTypes.func.isRequired,
    // user: PropTypes.object.isRequired,
};
export default connect(
    mapStataeToProps,
    { fetchNotification },
)(Notifications);

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'System',
        iconname: 'gear',
        message: 'Booking has been done #1234',
        number: 565656,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Promotion',
        iconname: 'tag',
        message: 'Booking has been done #1234',
        number: 565468,

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Trip Status',
        iconname: 'bell',
        message: 'Booking has been done #1234',
        number: 565467,
    },
];
