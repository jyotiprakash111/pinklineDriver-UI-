import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Increase,Decrease} from './Actions/CounterAction'
// class CounterApp extends Component {


//     render() {
    //     return (
    //         <View style={styles.container}>
    //             <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
    //                 <TouchableOpacity onPress={() => this.props.Increase()}>
    //                     <Text style={{ fontSize: 20 }}>Increase</Text>
    //                 </TouchableOpacity>
    //                 <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
    //                 <TouchableOpacity onPress={() => this.props.Decrease()}>
    //                     <Text style={{ fontSize: 20 }}>Decrease</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     );
    // }
// }

const CounterApp =({Increase,Decrease,count:{count}})=>{

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => Increase()}>
                    <Text style={{ fontSize: 20 }}>Increase</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>{count}</Text>
                <TouchableOpacity onPress={() => Decrease()}>
                    <Text style={{ fontSize: 20 }}>Decrease</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

 
const mapStateToProps = state =>({
    
    count: state.count
    
})
CounterApp.propTypes={
    Increase:PropTypes.func.isRequired,
    Decrease:PropTypes.func.isRequired,
    count:PropTypes.object.isRequired,
}


export default connect(mapStateToProps, {Increase,Decrease})(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});