import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Discover from './src/components/Discover'
import MangaDetail from './src/components/MangaDetail'
import Anime from './src/components/Anime'
import Settings from './src/components/Settings'


class App extends React.Component {
  render() {
    return (
      <Discover />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Discover: {
      screen: Discover,
      navigationOptions: () => ({
        title: `Discover`,
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'left',
        headerBackTitle: 'Discover',

      }),
    },
    MangaDetail: {
      screen: MangaDetail,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerBackTitle: 'Discover',

      }),      
    },
    Anime:{
      screen: Anime,
      navigationOptions: () => ({
        title: `Anime`,
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'left',
        headerBackTitle: 'Discover'
      })
    },
    Settings:{
      screen: Settings,
      navigationOptions: () => ({
        title: `Settings`,
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'left',
        headerBackTitle: 'Settings'
      })
    }
  },
  {
    initialRouteName: "Discover"
  }
);

const styles = StyleSheet.create({
});

export default createAppContainer(AppNavigator);
