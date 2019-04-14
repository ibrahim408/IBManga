import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import Section from './Section'

export default class SectionManager extends Component<Props> {

  render() {
    return (
        <View style={{height: 200, backgroundColor: 'transparent' }}>
          <FlatList
            style={{
            }}
            horizontal={false}
            data={this.props.itemList}
            renderItem={({ item,index}) => {
              return(
                <Section navigation={this.props.navigation} item={item} index={index} imageUri={require('../../img/13.jpg')} name="Naruto"/>
              );
            }}
          />
        </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
