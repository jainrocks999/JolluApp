import React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { View, Image } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator,createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import HomePage from '../Screens/Home';
import HomeDetails from '../Screens/HomeDetailsPage';
import SplashPage from '../Screens/SplashPage';
import LoginPage from '../Screens/LoginPage';
import CategoryName from '../Screens/CategoryNamePage';

const DashbOardstack = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  HomeDetails:{
    screen:HomeDetails
  },
   CategoryName:{
    screen:CategoryName
  },
  LoginPage:{
    screen:LoginPage
  },
});
const AuthStack = createSwitchNavigator(
  {
    AuthLoading: SplashPage,
    //LoginStack: LoginStack,
    DashbOardstack: DashbOardstack,
  //  HomeDetailsStack:HomeDetailsStack,
  //  CategoryNameStack:CategoryNameStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const RootApp = createAppContainer(AuthStack);
export default RootApp;