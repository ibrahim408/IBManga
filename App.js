import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './src/components/Home'

export default class App extends Component<Props> {
  render() {
    return (
      <Home/>
    );
  }
}

const styles = StyleSheet.create({
});
