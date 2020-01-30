import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F7F8FA',
    },
    wrapper: {
        // flex: 1,
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    imageStyle2: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    nameStyle: {
        fontWeight: '700',
        fontSize: 20
    },
    bookingTypeStyle: {
        color: '#fff',
        backgroundColor: '#ea0788',
        borderRadius: 25,
        alignSelf: 'flex-start',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 6,
        paddingVertical: 4,
        margin: 2,
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
        marginVertical: 15,
    },
    profileContentStyle: {
        width: '50%',
        marginHorizontal: 15,
    },
    profileContentStyle2: {
        width: '50%',
    },
    profileContentValueStyle: {
        color: '#757A87',
    },
});