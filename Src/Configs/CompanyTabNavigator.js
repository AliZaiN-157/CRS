import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Components/Profile';
import Notification from '../Components/Notification';
import CompanyPortal from '../Screens/CompanyPortal';
import Vacancy from '../Components/Vacancy';

const Tab = createMaterialBottomTabNavigator();

function CompanyTabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{ backgroundColor: '#524CB6' }}
        >
            <Tab.Screen
                name="Home"
                component={CompanyPortal}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Applications"
                component={Notification}
                options={{
                    tabBarLabel: 'Applications',
                    tabBarColor: '#534FB9',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="pen" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Vacancy"
                component={Vacancy}
                options={{
                    tabBarLabel: 'Vacancy',
                    tabBarColor: '#534FB9',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default CompanyTabNavigator;
