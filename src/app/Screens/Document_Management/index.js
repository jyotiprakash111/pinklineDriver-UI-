//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { styles } from './Styleshet';
// create a component

class Documentmgt extends Component {
    static navigationOptions = {
        title: 'Document Management',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: '#ea0788',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    keyExtractor = (item, index) => index.toString();
    renderDocuments = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.imgstyle} source={item.image} />
            <Text style={styles.subtitle}>Name: {item.name}</Text>
            <Text style={styles.subtitle}>Doc Number: {item.number}</Text>
        </View>
    );
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this.keyExtractor}
                    data={DATA}
                    renderItem={this.renderDocuments}
                />
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('AddDocument')}
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

//make this component available to the app
export default Documentmgt;

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Driving Licence',
        image: require('../../assets/Images/id-card.png'),
        name: 'Jyotiprakash',
        number: '784873647263',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'ID Proof',
        image: require('../../assets/Images/id-card.png'),
        name: 'Jyotiprakash',
        number: '2173981237981',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Vehicle Document',
        image: require('../../assets/Images/id-card.png'),
        name: 'Jyotiprakash',
        number: '36482734687236',
    },
];
