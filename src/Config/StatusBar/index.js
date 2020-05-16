import React, { Component } from 'react';

import { StatusBar } from 'react-native';

import SColor from '../../Config/Color/Colors.js';
export default function Status() {
  return (
    <StatusBar
      backgroundColor={SColor.primary}
      barStyle='light-content'
    />
  )
}

