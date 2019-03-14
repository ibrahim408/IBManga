import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import CategoryManager from './CategoryManager'
import firebase from '../../Firebase';

export default class Discover extends Component<Props> {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'transparent' }}>
        <View>
          <Image
            style={{
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              position: 'absolute',
              opacity: 1,
            }}
            source={require('../../img/background4.png')}
          />          
        </View>  
        <ScrollView style={styles.container}>
          <View style={{height: 35}}>
          </View>
          <CategoryManager category={"SEASONAL - WINTER 2019"} navigation={this.props.navigation}  /> 
          <CategoryManager category={"TOP RANDKED ANIME"} navigation={this.props.navigation} /> 
          <CategoryManager category={"TOP AIRING ANIME"} navigation={this.props.navigation} /> 
          <CategoryManager category={"MOST POPULAR ANIME"} navigation={this.props.navigation} /> 
          <CategoryManager category={"TOP RANKED BOOKS"} navigation={this.props.navigation} /> 
          <CategoryManager category={"MOST POPULAR MANGA"} navigation={this.props.navigation} /> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

