import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F7F8FA',
        // height: '100%',
    },
    scrollViewStyle: {
        width: '100%',
        marginLeft: 18,
        marginBottom: 80,
        marginTop: 15,
    },
    card: {
        height: 250,
        width: '90%',
        elevation: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#c1c1c1',
        borderWidth: 0.5,
    },
    items: {
        height: 50,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#c1c1c1',
        borderWidth: 0.5,
    },
    imgstyle: {
        height: 150,
        width: 250,
        borderRadius: 10,
    },
    completebtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Uploadbtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ea0788',
        elevation: 2,
        borderRadius: 35,
        height: 40,
        width: 160,
        marginTop: 10,
    },
    Uploadtxt: {
        color: '#ea0788',
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    buttonStyle: {
        justifyContent: 'flex-end',
        height: '20%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    labelTextStyle: {
        marginTop: 20,
        marginBottom: 5,
        alignSelf: 'flex-start',
        marginLeft: 2,
        fontWeight: 'bold',
        color: '#000',
    },
    linearGradientStyle: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradientTextStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

