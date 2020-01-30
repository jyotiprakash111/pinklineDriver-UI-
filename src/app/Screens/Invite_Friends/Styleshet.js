import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    wrapper:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ea0788',
        borderRadius: 150,
        height: 220,
        width: 220,
        marginBottom: 30,
        marginTop:50
    },
    imgStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        height:100,
        width:100
    },
    txtstyle: {
        fontSize: 25,
        fontWeight: '800',
    },
    txtStyle2: {
        fontSize: 15,
        marginHorizontal:15
    },
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 10,
        marginBottom:10
    },
    txtinput:{
        elevation: 5,
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop:5 
    },
    btncontainer:{
        elevation: 5,
        backgroundColor: '#ea0788',
        height: 60,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom:10
    },
    inviteTxt:{
        color:'#fff',
        fontSize:20,
        fontWeight:'600'
    },
});