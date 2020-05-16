import React from 'react';

import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Commanview({ title, onPress }) {
  return (
    <View style={styles.MainView}>
      <TouchableOpacity
        onPress={onPress}>
        <Image style={styles.ImageView} resizeMode={'stretch'}
          source={require('../../Assets/Images/Stomach_and_Duodenum.png')} />
        <Text style={styles.TextFont}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  MainView: {
    height: 86,
    width: '47%',
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.8
  },
  ImageView: {
    alignItems: 'center',
    width: 42,
    height: 42
  },
  TextFont: {
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
    marginLeft: 30
  },
});
