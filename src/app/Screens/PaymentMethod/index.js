//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardSection } from '../../Components/Card2/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { styles } from './Stylesheet';
// create a component
class PymentMethod extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <CardSection>
                    <View style={styles.cardHeaderContainerStyle}>
                        <View style={styles.innercontainer}>
                            <Icon
                                name="credit-card-alt"
                                color="#fff"
                                size={20}
                                style={styles.arrowStyle}
                            />
                        </View>
                        <Text style={styles.cardTextStyle}>Add Bank Account</Text>
                        <Icon2
                            name="right"
                            color="#c1c1c1"
                            size={20}
                            style={styles.arrowStyle}
                        />
                    </View>
                </CardSection>
            </View>
        );
    }
}

export default PymentMethod;
