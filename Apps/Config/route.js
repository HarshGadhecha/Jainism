import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Music from '../Screens/Music';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
        initialRouteName='Home'
            tabBarOptions={{
                inactiveTintColor: 'grey',
                activeTintColor: 'green',
                showLabel: false,
                tabStyle: {
                    backgroundColor: '#fff',
                    height: 60,
                    paddingBottom: 12,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Icon
                            name={focused ? 'home-outline' : 'home-outline'}
                            size={28}
                            color={color} />
                    ),
                }} />

            <Tab.Screen
                name="Music"
                component={Music}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Icon
                            name={focused ? 'account' : 'account'}
                            size={28}
                            color={color} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default Tabs;