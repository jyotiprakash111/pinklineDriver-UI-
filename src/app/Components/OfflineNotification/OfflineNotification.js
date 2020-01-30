import React, { Component } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import  Icon  from 'react-native-vector-icons/FontAwesome';

class OfflineNotification extends Component {
    render() {
        return (
            <LinearGradient
            start={{ x: 1.45, y: 1.05 }}
            end={{ x: 0.8, y: 2.50 }}
            colors={['#e5e4e2','#ea0788']}
            style={{ height: 60, width: '100%', borderWidth:0.5, borderColor:'#000', flexDirection:'row'}}>
                {/* <Image source={require('../../assets/Icons/moon.png')} style={{height:30, width:30, marginLeft: 10,marginTop:10, marginRight: 20}} /> */}
                <Icon
                name="eye-slash"
                size={30}
                color="#fff"
                style={{marginLeft: 10, alignSelf: 'center'}}
                />
                <View style={styles.container}>
                <Text style={{color:'#fff'}}>You are Offline!</Text>
                <Text style={{color:'#fff'}}>Go online to start accepting jobs</Text>
                </View>
            </LinearGradient>
        )
    }
}

export default OfflineNotification;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        marginVertical: 10,
        marginLeft: 30,

    },
})