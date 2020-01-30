import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { CardHeader, CardSection } from '../Card2/common';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Styleshet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchNotification } from '../../Redux/Actions/NotificationAction';
import AsyncStorage from '@react-native-community/async-storage';


class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {

        const value = await AsyncStorage.getItem('@login');
        if (value !== null) {
            var data = {
                userid: value
            }
            this.props.fetchNotification(data)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon2
                        name="up"
                        color='#c1c1c1'
                        size={15}
                    />
                </View>
                <FlatList
                    data={this.props.notification.notiDetails}
                    renderItem={item => (
                        <View style={{ padding: 2 }}>
                            <CardHeader>
                                <Image style={styles.imagestyle} source={require('../../assets/Images/boy.png')} />
                                <View style={styles.headerContentStyle}>
                                    <Text >
                                        {item.clientname}
                                    </Text>
                                    <Text style={{ color: '#fff', backgroundColor: '#ea0788', borderRadius: 25, alignSelf: 'flex-start', fontSize: 12, fontWeight: 'bold', paddingHorizontal: 6, paddingVertical: 4, margin: 2, }}>City</Text>
                                </View>
                                <View style={styles.tripAmountStyle}>
                                    <TouchableOpacity style={{ marginRight: 5 }}>
                                        <Icon
                                            name="call"
                                            size={20}
                                            color="#4cd137"
                                        />
                                        {/* <Text style={{ color: '#4cd137', fontSize: 15 }}>Call</Text> */}
                                    </TouchableOpacity>
                                    <Text style={{ marginRight: 5 }}>₹25</Text>
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
                            {/* <CardSection> */}
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.btnstyle1}>
                                    <Icon3
                                        name="check-square"
                                        size={20}
                                        color="#fff"
                                    />
                                    <Text style={{ color: '#fff', fontSize: 15 }}>
                                        Accept
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnstyle2}>
                                    <Icon2
                                        name="delete"
                                        size={20}
                                        color="#fff"
                                    />
                                    <Text style={{ color: '#fff', fontSize: 15 }}>
                                        Reject
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}
const mapStataeToProps = state => ({
    notification: state.notification
});
BookingDetails.propTypes = {
    fetchNotification: PropTypes.func.isRequired,
    // user: PropTypes.object.isRequired,
};
export default connect(
    mapStataeToProps,
    { fetchNotification },
)(BookingDetails);
