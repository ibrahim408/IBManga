import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Discover from './components/Discover'
import MangaDetail from './components/MangaDetail'
import Anime from './components/Anime'
import Settings from './components/Settings'
import {TabNavigator} from './config/navigation'
class IBManga extends Component {
  
  constructor() {
    super();
  }
  
  render() {
    return (
      <Discover />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Discover: {
      screen: TabNavigator,
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



export default createAppContainer(AppNavigator);

