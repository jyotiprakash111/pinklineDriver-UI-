import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    item: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 15,
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
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 15,
        color: '#000',
        marginVertical: 10,
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
    imgstyle: {
        height: 150,
        width: '80%',
        borderRadius: 10,
    },
});