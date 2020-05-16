import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FlatButton({ title, onPress, bgcolor, colorText }) {
  return (
    <View style={{
      width: '99%',
      marginTop: 4,
      padding: 6,
      //justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TouchableOpacity
        style={{
          width: '92%',
          height: 48,
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderRadius: 6,
          borderColor: '#000',
          borderWidth: 1.8,
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Text style={{
          color: '#000',
          fontSize: 14,
          fontWeight: '700',
          alignSelf: 'center',

        }}>{title}</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  parentButtonStyle: {
    flex: 1,
    margin: 5,
  },
  buttonStyle: {
    borderRadius: 16,
    backgroundColor: '#03a1fc',
    padding: 10,
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
