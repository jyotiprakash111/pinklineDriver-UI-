import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
        // backgroundColor: 'transparent',

    },
    item: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        elevation: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imageWrapperStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#ea0788',
        height: 50,
        width: 50,
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 15,
        color: '#C8C7CC',
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea0788',
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 1,
        elevation: 4,
    },
});