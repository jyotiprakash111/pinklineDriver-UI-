/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/sort-comp */
import React from 'react';
import {
    View,
    Image,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions
} from 'react-native';

const Screen_Width = Dimensions.get('window').width;
const Screen_Height = Dimensions.get('window').height;

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.boot();
    }
    static navigationOptions = {
        header: null
    }
    boot = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Intro');
        }, 2000);
    }
    render = () => (
            <View style={styles.mainContainer}>
                <StatusBar hidden />
                <View style={styles.firstViewStyle}>
                <Image style={styles.iconStyle} source={require('../../assets/steering-wheelPink.png')} />
                <Text style={styles.textContainer}>Pinkline Driver</Text>
                </View>
                <View style={styles.secondViewStyle} >
                <Image style={styles.footerImageStyle} source={require('../../assets/SplashFooter.png')} />
                </View>
            </View>
        )
}

export default SplashScreen;

const styles = StyleSheet.create({
    textContainer: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 5,
        color: '#ea0788',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column', 
        width: Screen_Width,
        height: Screen_Height,
    },
    firstViewStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 50,
    },
    iconStyle: {
        width: 125, 
        height: 100,
    },
    secondViewStyle: {
        flex: 1, 
        alignItems: 'center', 
    },
    footerImageStyle: {
        width: '100%', 
        height: 200, 
        position: 'absolute', 
        bottom: 0,
        resizeMode: 'cover',
    }
});
  
