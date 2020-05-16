import AsyncStorage from '@react-native-community/async-storage';

import React, { Component } from 'react';

import { StyleSheet, ImageBackground, Image, Alert, Text, View } from 'react-native';

import StatusBar from '../../Config/StatusBar';

import SplashStyles from './style';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
        // if (accessToken === null) {
      
          setTimeout(() => this.props.navigation.navigate('DashbOardstack'), 500);
        // } else {
      
        //   setTimeout(() => this.props.navigation.navigate('Buttomtab'), 500);
        // }

  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1A232E', alignItems: 'center', justifyContent: 'center' }}>
       
        <Image source={require('../../Assets/Images/logo.png')}
          style={{ width: 250, height: 120,alignItems: 'center' }} resizeMode={'stretch'}>
        </Image>
        <StatusBar />
      </View>
    )
  }
}
