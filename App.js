import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Home from './src/components/Home'
import List from './src/components/List'

export default class App extends Component<Props> {
  render() {
    return (
      <Home/>
    );
  }
}

const styles = StyleSheet.create({
});
