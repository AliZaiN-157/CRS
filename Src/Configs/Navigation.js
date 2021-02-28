import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import SplashScreen from '../Screens/SplashScreen'

const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator >
    )

}

export default AuthNavigator