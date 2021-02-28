import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../Configs/Navigation'
import StudentTabNavigator from '../Configs/StudentTabNavigator'
import CompanyTabNavigator from '../Configs/CompanyTabNavigator'
import AdminTabNavigator from '../Configs/AdminTabNavigator'



const App = () => {

    return (
        <NavigationContainer>
            {/* All though I tried my best but can't make it.
             Will Try Again Inshallah with backend with complete MERN Stack */}
            {/* I stuck between Navigation(Tab & Drawer) Need Pratice. Sorry For the bad perfomance */}

            <AuthNavigator />
            {/* <StudentTabNavigator /> */}
            {/* <CompanyTabNavigator /> */}
            {/* <AdminTabNavigator /> */}
        </NavigationContainer>
    )
}

export default App
