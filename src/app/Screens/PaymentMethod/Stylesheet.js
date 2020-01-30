import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    cardHeaderContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    cardTextStyle: {
        width: '65%',
        fontSize: 15,
        marginLeft: 20,
        // fontWeight: 'bold',
    },
    innercontainer: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#ea0788',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
