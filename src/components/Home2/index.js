import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import CategoryManager from './CategoryManager'

// retrieve data from firebase
// create search bar (should filter each)
// 
export default class Home2 extends Component<Props> {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{height: 85, backgroundColor: 'pink'}}>
        </View>
        <CategoryManager /> 
        <CategoryManager /> 
        <CategoryManager /> 
        <CategoryManager /> 
        <CategoryManager /> 
        <CategoryManager /> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4c1f2'
  }
});
