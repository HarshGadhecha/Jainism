import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Apps/Config/route';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={Tabs}
        options={{
          headerShown: false
        }} />
      <Stack.Screen
        name="Tab1"
        component={Tabs}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  )
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
