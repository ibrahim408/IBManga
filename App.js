import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/Home'
import Home2 from './src/components/Home2'
import List from './src/components/List'
import MangaDetail from './src/components/MangaDetail'
import FirebaseTest from './src/components/FirebaseTest'
import Anime from './src/components/Anime'
import Manga from './src/components/Manga'
import Settings from './src/components/Settings'

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
    Home2: Home2,
    List: List,
    MangaDetail: MangaDetail,
    FirebaseTest: FirebaseTest,
    Anime: Anime,
    Manga: Manga,
    Settings: Settings
  },
  {
    initialRouteName: "Settings"
  }
);

const styles = StyleSheet.create({
});

export default createAppContainer(AppNavigator);
