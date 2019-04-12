import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import SectionManager from './SectionManager'
import SectionHeader from './SectionHeader'
import firebase from '../../Firebase';

export default class Anime extends Component<Props> {

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#326D69'}}>      
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
          <SectionHeader title={"Reading"} count={"3"} />
          <SectionManager navigation={this.props.navigation}  />
          <SectionHeader title={"Completed"} count={"3"} /> 
          <SectionManager navigation={this.props.navigation}  />             
          <SectionHeader title={"On Hold"} count="3" /> 
          <SectionManager navigation={this.props.navigation}  />                     
          <SectionHeader title={"Dropped"} count="3" />
          <SectionManager navigation={this.props.navigation}  />          
          <SectionHeader title={"Plan To Watch"} count="4" />
          <SectionManager navigation={this.props.navigation}  />          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  example: {
    height: 500,
    width: '100%',
    backgroundColor: '#FFFFFF'
  }
});

