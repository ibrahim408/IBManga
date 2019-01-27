import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import Category from './Category'

export default class CategoryManager extends Component<Props> {

  render() {
    return (
        <View style={{height: 200 }}>
          
          <View style={{height: 20}}>
              <View style={{paddingLeft: 20, paddingTop: 5}}>
                  <Text style={{fontSize: 15, color: 'grey'}}>
                      SEASONAL - WINTER 2019
                  </Text>
              </View>
          </View>

          <FlatList
            style={{
              opacity: 0.5
            }}
            horizontal={true}
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}]}
            renderItem={({ item,index}) => {
              return(
                <Category item={item} index={index} imageUri={require('../../img/13.jpg')} name="Naruto"/>
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
    backgroundColor: '#a4c1f2'
  }
});
