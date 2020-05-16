import AsyncStorage from '@react-native-community/async-storage';

import React, { Component } from 'react';

import { StyleSheet, Text, ScrollView, View, Image, TextInput, TouchableOpacity, Button, Alert, ActivityIndicator } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import Toast from 'react-native-simple-toast';

import HeaderView from '../../Config/Header';
import StatusBar from '../../Config/StatusBar';
import FlatButton from '../../Config/Button/Button.js';
import Colors from '../../Config/Color/Colors.js';

//const auth0 = new Auth0({ domain: 'agacommunications.auth0.com', clientId: 'E8gr7GcI8ntCUWOEUOnFSLQ4s2J2sHq1' });
export default class LoginPage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      UserEmail: '',
      UserPassword: '',
      spinner: false,

    }
  
  }
componentDidMount(){
}

  LoginUser = () => {
     if(this.state.UserEmail !== ''){
       if(this.state.UserPassword !== ''){
         this.props.navigation.navigate('HomePage')

       }else{
        Toast.show('Please enter UserEmail');
       }
       }else{
        Toast.show('Please enter UserEmail');
       }
     }

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor: Colors.primary,
      }}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
        />
          <View style={{ marginTop: 8, justifyContent: 'space-between', alignItems: 'center', height: 52, width: '100%', flexDirection: 'row' }}>
          <View style={{width:'94%',alignItems:'center'}}>
          <Image
          style={{height: '90%', width:100,padding:10 }} resizeMode={'stretch'}
          source={require('../../Assets/Images/logo_small.png')}>
          </Image>
          </View>
               </View>
       
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 12 }}>

          <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600', marginLeft: 13 }}>Log In</Text>

                        <View style={{margin:12,justifyContent:'center',marginTop:20}}>
          <TextInput
            style={{
              color: '#fff', fontSize: 16, marginTop:6,
              height: 40,
              paddingLeft:10,
              borderColor: '#fff',
              borderRadius:8,
              borderWidth: 1.5
            }}
            placeholder="Email Address"
            editable={true}
            placeholderTextColor = "#fff"
            onChangeText={(UserEmail) => this.setState({ UserEmail })}
            value={this.state.UserEmail}
          />
          <TextInput
            style={{
              color: '#fff', fontSize: 16, marginTop:10,
              height: 40,
              paddingLeft:10,
              borderColor: '#fff',
              borderRadius:8,
              borderWidth: 1.5
            }}
            placeholder="Password"
            editable={true}
          placeholderTextColor = "#fff"
            onChangeText={(UserPassword) => this.setState({ UserPassword })}
            value={this.state.UserPassword}
          />
</View>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: '99%' }}>
            <View style={{
              width: '99%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <TouchableOpacity
                style={{
                  width: '93%',
                  height: 46,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  borderRadius: 4,
                  alignItems: 'center',
                  marginLeft: 0,
                  marginTop: 10,
                  // marginBottom: 20,
                }}
                onPress={() => this.LoginUser()}>
                <Text style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: '700',
                  alignSelf: 'center',
                }}>LOG IN</Text>
              </TouchableOpacity>
            </View>
    

       </View>
       </View>
       <StatusBar/>
      </View>

    );
  }
}

