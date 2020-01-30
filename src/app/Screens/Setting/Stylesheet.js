import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#F7F8FA',
        // marginVertical: 20,
    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginHorizontal: 10,
    },
    cardBodyImageStyle: {
        height: 25,
        width: 25,
    },
    cardHeaderContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    imageContainerStyle: {
        width: '35%',
        justifyContent: 'center',
    },
    cardHeaderTextStyle: {
        width: '60%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    arrowStyle: {
        width: '5%'
    },
    cardBodyContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    cardBodyImageContainerStyle: {
        width: '20%',
    },
    cardBodyImageWrapperStyle: {
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBodyTextStyle: {
        width: '75%',
        fontSize: 16,
        fontWeight: '600',
    },
});
