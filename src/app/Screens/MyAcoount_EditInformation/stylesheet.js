import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
    },
    wrapper: {
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
    },
    imageStyle2: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    buttonStyle: {
        fontWeight: '700',
        fontSize: 15,
        color: '#ea0788',
        marginVertical: 10,
    },
    nameTypeStyle: {
        height: 40,
        width: 120,
        borderColor: '#EFEFF4',
        borderBottomWidth: 1,
    },
    inputTypeStyle: {
        height: 40,
        width: 170,
        borderColor: '#EFEFF4',
        borderBottomWidth: 1,
    },
    profileInfoStyle: {
        color: '#EA0788', 
        fontWeight: 'bold', 
        marginLeft: 10, 
        marginVertical: 10,
    },
    profileContentContainerStyle: {
        flex: 1, 
        flexDirection: 'row', 
        marginVertical: 10,
    },
    profileContentStyle: {
        width: '40%', 
        marginHorizontal: 10,
        marginVertical: 10,
    },
    profileContentStyle2: {
        width: '60%',
    },
    profileContentValueStyle: {
        color: '#757A87',
    },
});
