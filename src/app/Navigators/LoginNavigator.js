import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../Screens/Login/Login';
import SignUpScreen from '../Screens/Signup/Signup';

const LoginNavigator = createStackNavigator({
    signIn: {
        screen: LoginScreen
    } ,
    signUp: {
        screen: SignUpScreen
    },
},{
    initialRouteName: 'signIn'
})

export default LoginNavigator
