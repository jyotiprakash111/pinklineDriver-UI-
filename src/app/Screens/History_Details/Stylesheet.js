import { StyleSheet, Dimensions } from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ea0788'
    },
    wrapper: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        height: ScreenHeight - 150,
        width: ScreenWidth - 40,
        marginVertical: 5,
        marginHorizontal: 30,      
    },
    imagestyle: {
        height: 50,
        width: 50,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 5,
        marginLeft: 5,
    },
    tripStyle: {
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    tripAmountStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 100,
        alignItems: 'center'
    },
    reviewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});
