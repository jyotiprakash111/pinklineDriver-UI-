import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './Stylesheet';

function Item({ title, pid, cost, image }) {
    return (
        <View style={styles.item}>
            <View style={{ width: '20%' }}>
                <Image
                    source={image}
                    style={{ height: 50, width: 50, borderRadius: 50, }}
                />
            </View>
            <View style={{ flexDirection: 'column', width: '60%', justifyContent: 'center', marginLeft: 5, }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{pid}</Text>
            </View>
            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>₹ {cost}</Text>
            </View>
        </View>
    );
}

class MyWallet extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#f368e0', '#ea0788']} style={styles.linearGradient2}>
                    <Text style={styles.wallettxt}>My Wallet</Text>
                    <View style={styles.paymentwrapper}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#e84393', borderRadius: 50, height: 50, width: 50 }}>
                            <Icon2
                                name="cash-100"
                                size={20}
                                color="#fff"
                            />
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Payment')}>
                            <Text style={{ marginLeft: 15, fontSize: 17, }}>Payment Method</Text>
                        </TouchableOpacity>
                        <Icon
                            name="right"
                            size={15}
                            color="#c1c1c1"
                            style={{ marginLeft: 75 }}
                        />
                    </View>
                </LinearGradient>
                <View style={{ marginTop: 60, marginLeft: 10, marginBottom: 15, }}>
                    <Text style={{ color: '#ea0788', fontWeight: 'bold', }}>PAYMENT HISTORY</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        (<Item
                            title={item.title}
                            pid={item.pid}
                            cost={item.cost}
                            image={item.image}
                        />)
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default MyWallet;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Ramesh',
        image: require('../../assets/Images/boy.png'),
        pid: '#101010',
        cost: '250',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Priya',
        image: require('../../assets/Images/boy.png'),
        pid: '#101011',
        cost: '320',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Allen',
        image: require('../../assets/Images/boy.png'),
        pid: '#101012',
        cost: '260',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Vipin',
        image: require('../../assets/Images/boy.png'),
        pid: '#101013',
        cost: '440'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Bikash',
        image: require('../../assets/Images/boy.png'),
        pid: '#101014',
        cost: '570',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Jyoti',
        image: require('../../assets/Images/boy.png'),
        pid: '#101014',
        cost: '120',
    },
];
