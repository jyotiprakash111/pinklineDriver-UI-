import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';

export default class OtpVerification extends Component {
    state = {
        done: false
    }
    componentDidMount() {
        // alert(JSON.stringify(this.props.confirmResult))
    }
    _onFulfill(codes) {
        // alert(this.props.confirmResult)
        this.props.confirmResult.confirm(codes)
            .then((user) => {
                // this.props.navigation.navigate('Drawer')
                this.setState({
                    done: true
                })
            })// User is logged in){
            .catch((error) => {
                alert('Invalid Code')
            }) // Error with verification code);
    }
    render() {
        if (this.state.done) {
            this.props.navigation.navigate('Drawer')
        }
        return (
            <View style={styles.container} >
                <View style={styles.wrapper}>
                    <Text style={{ fontSize: 30, fontWeight: '800', color: '#000' }}>
                        Phone Verification
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: '800', color: '#000' }}>
                        Enter your OTP code here
                    </Text>
                </View>
                <CodeInput
                    keyboardType='number-pad'
                    ref="codeInputRef1"
                    secureTextEntry
                    className={'border-b'}
                    space={5}
                    size={50}
                    inputPosition='left'
                    onFulfill={(code) => this._onFulfill(code)}
                    activeColor="#000"
                    inactiveColor="#c1c1c1"
                    codeLength={6}
                    containerStyle={{ marginLeft: 20 }}
                // paddingBottom={30}
                />
                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'column' }}>
                    <TouchableOpacity>
                        <Text style={{ marginVertical: 30 }}>Didn't received OTP? Resend OTP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btncontainer}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#fff', }}>VERIFY NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    wrapper: {
        marginLeft: 20,
        marginTop: 100,
    },
    btncontainer: {
        backgroundColor: '#ea0788',
        height: 50,
        width: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

})