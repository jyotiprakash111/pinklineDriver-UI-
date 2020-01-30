import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA'
    },
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    historycontainer: {
        elevation: 2,
        borderColor: '#ea0788',
        height: 50,
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 20,
    },
    dateContainer: {
        flexDirection: 'row',
        elevation: 2,
        borderColor: '#ea0788',
        height: 50,
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    txtstyle: {
        fontSize: 20,
        fontWeight: '600'
    },
    imagestyle: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        borderRadius: 10,
    },
    btncontiner: {
        width: 140,
        height: 80,
        backgroundColor: '#ea0788',
        borderRadius: 10,
        // marginLeft: ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btncontiner2: {
        width: 140,
        height: 80,
        backgroundColor: '#ea0788',
        borderRadius: 10,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 5,
        width: '55%',
        marginLeft: 15,
    },
    tripAmountStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 5,
        width: '30%',
        alignItems: 'center',
    },
})
    ;
