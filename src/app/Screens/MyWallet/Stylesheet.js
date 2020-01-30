import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
    },
    paymentwrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: '85%',
        elevation: 4,
    },
    wallettxt: {
        marginTop: 150,
        marginBottom: 40,
        color: '#fff',
        fontSize: 25, 
        fontWeight: 'bold',
    },
    linearGradient: {
        marginTop: 200,
        paddingLeft: 15,
        paddingRight: 15,
        height: 100,
        width: 200,
        borderRadius: 5
    },
    linearGradient2: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: '#D8D8D8',
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        color: '#8E96AC',
    }
});
