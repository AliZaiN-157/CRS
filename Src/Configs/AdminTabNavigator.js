import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Components/Profile';
import Notification from '../Components/Notification';
import AdminPanel from '../Screens/AdminPanel';

const Tab = createMaterialBottomTabNavigator();

function AdminTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{ backgroundColor: '#524CB6' }}
        >
            <Tab.Screen
                name="Home"
                component={AdminPanel}
                options={{
                    tabBarLabel: 'Student Activity',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notification}
                options={{
                    tabBarLabel: 'Company Activity',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="CreateAdmin"
                component={Profile}
                options={{
                    tabBarLabel: 'CreateAdmin',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AdminTabNavigator;
