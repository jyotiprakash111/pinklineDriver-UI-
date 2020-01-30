//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './Stylesheet';
import LinearGradient from 'react-native-linear-gradient';

// create a component
class Addbankac extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{ marginVertical: 25 }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.labelStyle}>BANK AC NO</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            style={styles.txtInput}
                        />
                    </View>
                    <Text style={styles.labelStyle}>ACCOUNT HOLDER'S NAME</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Enter name"
                            style={styles.txtInput}
                        />
                    </View>
                    <Text style={styles.labelStyle}>IFSC CODE</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Enter IFSC CODE"
                            style={styles.txtInput}
                        />
                    </View>
                    <Text style={styles.labelStyle}>MICR CODE</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Enter MICR CODE (Optional)"
                            style={styles.txtInput}
                        />
                    </View>
                    <Text style={styles.labelStyle}>GST NO</Text>
                    <View style={styles.inputContainerStyle}>
                        <TextInput
                            placeholder="Enter GST No (Optional)"
                            style={styles.txtInput}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.completeButtonStyle}>
                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#fd79a8', '#e84393', '#ea0788']} style={styles.completeButtonStyle}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>ADD ACCOUNT</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Addbankac;
