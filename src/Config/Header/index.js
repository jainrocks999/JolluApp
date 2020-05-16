import React, { Component } from 'react';

import { StyleSheet, View, Image, Text,TouchableOpacity } from 'react-native';
export default function Header({onPress}) {
     return (
          <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', height: 32, width: '100%', flexDirection: 'row' }}>
              <View style={{width:'94%',alignItems:'center'}}>
               <Image
                    style={{height: '80%', width:100,padding:10 }} resizeMode={'stretch'}
                    source={require('../../Assets/Images/logo_small.png')}>
               </Image>
               </View>
               <View style={{alignItems:'flex-end',width:'6%'}}>
                <TouchableOpacity
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                        onPress={onPress}>
               <Image
                    style={{height: '80%', width: 40,padding:10 }} resizeMode={'stretch'}
                    source={require('../../Assets/Images/menu.png')}>
               </Image>
               </TouchableOpacity>
               </View>
          </View>
     )
}

