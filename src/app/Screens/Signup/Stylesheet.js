import { StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 25,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        elevation: 5,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        backgroundColor: '#ea0788',
        height: 250,
        width: '100%',
        borderRadius: 15,
        marginBottom: "4%",
        marginTop: '5%'
    },
    textcontainer: {
        paddingTop: 30,
        fontSize: 25,
        color: '#fff',
        paddingLeft: 25,
    },
    btncontainer: {
        backgroundColor: '#2C3335',
        marginTop: 10,
        padding: 10,
        height: 50,
        width: "100%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

});
