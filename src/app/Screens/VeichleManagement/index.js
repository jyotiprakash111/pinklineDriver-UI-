import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './Stylesheet';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CabDetails } from '../../Redux/Actions/CounterAction'
import AsyncStorage from '@react-native-community/async-storage';

class VehicleManagement extends Component {

    static navigationOptions = {
        title: 'Veichle Management',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 35,
        },
    };
    async componentDidMount() {
        var userid = await AsyncStorage.getItem('@login')
        var data = { userid }
        this.props.CabDetails(data)
    }
    keyExtractor = (item, index) => index.toString()
    renderVehicles = ({ item }) => (
        <TouchableHighlight>
            <View style={styles.item}>
                <View style={{ width: '20%', }}>
                    <View style={styles.imageWrapperStyle}>
                        <Image
                            source={require('../../assets/Images/taxi-front-view.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </View>
                <View style={{ width: '80%', marginHorizontal: 5, }}>
                    <Text style={styles.title}>{item.cab_brand}</Text>
                    <Text style={styles.subtitle}>{item.license_plate}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this.keyExtractor}
                    data={this.props.cabs.cabs}
                    renderItem={this.renderVehicles}
                />
                <View style={{ alignItems: 'center', backgroundColor: ' rgba(0,0,0,0.01)' }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('Addveichle')}
                        style={styles.addButton}>
                        <Image
                            source={require('../../assets/Icons/add.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => ({

    cabs: state.cabs

})
VehicleManagement.propTypes = {
    CabDetails: PropTypes.func.isRequired,
    cabs: PropTypes.object.isRequired,
}
export default connect(mapStateToProps, { CabDetails })(VehicleManagement)

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Maruti Suzuki WagonR',
        number: 'MP-01-BE-5656',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Toyota Innova',
        number: 'MP-08-ZX-0889',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Tata Indica',
        number: 'MP-09-AA-3229',
    },
];
