import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    PermissionsAndroid
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { fetchUser } from '../../Redux/Actions/CounterAction';
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import PropTypes from 'prop-types';
import BottomDrawer from 'rn-bottom-drawer';
import Bookingdetails from '../../Components/Booking_Details';

const { width, height } = Dimensions.get('window');
const TAB_BAR_HEIGHT = 5;

const ASPECT_RATIO = width / height;
const LATITUDE = 12.972442;
const LONGITUDE = 77.580643;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class GoogleMapPlayground extends Component {
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
            this.props.fetchUser(data)
        }
    }

    renderContent = () => {
        return (
            <ScrollView>
                {/* <Text>Get directions to your location</Text> */}
                <Bookingdetails />
            </ScrollView>
        )
    }
    async  requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true
            } else {
                console.log('Camera permission denied');
                return false
            }
        } catch (err) {
            console.warn(err);
            return false
        }
    }
    componentDidMount() {
        this.requestLocationPermission()
        if (true) {
            Geolocation.getCurrentPosition(
                (position) => {
                    alert(JSON.stringify(position));
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                },
                (error) => {
                    // See error code charts below.
                    Alert.alert(JSON.stringify(error.code), JSON.stringify(error.message));
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsMyLocationButton
                    showsBuildings={true}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}></MapView>
                <View style={{ width: '10%', height: 60, backgroundColor: 'rgba(0,0,0,0.01)' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        {/* <Text>open drawer</Text> */}
                        <Image source={require('../../assets/Icons/bar.png')} style={{ width: 20, height: 20, marginLeft: 10, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                {!this.props.notification.notification ? <BottomDrawer
                    containerHeight={600}
                    offset={TAB_BAR_HEIGHT}
                    startUp={false}
                    roundedEdges
                    shadow={true}
                // downDisplay={20}
                >
                    {this.renderContent()}
                </BottomDrawer> : <View></View>}
            </View>
        );
    }
}
const mapStataeToProps = state => ({
    user: state.user,
    notification: state.notification
});
GoogleMapPlayground.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    provider: MapView.ProviderPropType,
    // user: PropTypes.object.isRequired,
};
export default connect(
    mapStataeToProps,
    { fetchUser },
)(GoogleMapPlayground);


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        top: 50,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});