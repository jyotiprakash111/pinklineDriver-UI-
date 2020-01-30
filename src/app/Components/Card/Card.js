import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class CardComponent extends Component {
    render() {
        return (
            <LinearGradient
            start={{ x: 1.85, y: 1.25 }}
            end={{ x: 0.5, y: 2.50 }}
            colors={['#ea0788', '#e5e4e2']}
            style={[{ height: 250, width: '100%'},styles.card]}
            //  locations={[0,0.5,0.5]}
            >
            <Text>Card Component </Text>
            </LinearGradient>
            // </View>
        )
    }
};

export default CardComponent;

const styles = StyleSheet.create({
    card: {
      // flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
      width: 300,
      borderRadius: 10,
      elevation: 5,
      // borderWidth: 0.5,
      // borderColor: "#000",
    //   marginLeft: 30,
    },
});
