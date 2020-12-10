import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from './src/layouts/home';



const navigation = createStackNavigator({
  Home: Home
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Home'
  }
})

export default createAppContainer(navigation)