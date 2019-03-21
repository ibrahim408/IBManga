import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import Section from './Section'

export default class SectionManager extends Component<Props> {

  render() {
    return (
        <View style={{flex: 1, backgroundColor: 'blue' }}>
          <Section />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
