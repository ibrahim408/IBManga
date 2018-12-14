import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/Home'
import List from './src/components/List'
import MangaDetail from './src/components/MangaDetail'

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    List: List,
    MangaDetail: MangaDetail
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
});

export default createAppContainer(AppNavigator);
