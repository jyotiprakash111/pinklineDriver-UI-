import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

class Notification extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.txtcontainer}>Notifications</Text>
                </View>
            </View>
        )
    }
}
export default Notification;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:"#ecf0f1"
    },
    wrapper:{
        backgroundColor:'#fff',
        alignItems:'center',
        height: 100,
        width: "100%",
        
    },
    txtcontainer:{
        color:'#000',
        fontSize:20,
        fontWeight:'300',
        marginTop:60
    }
});