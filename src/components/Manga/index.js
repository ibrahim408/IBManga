import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import SectionManager from './SectionManager'
import SectionHeader from './SectionHeader'
import firebase from '../../Firebase';

export default class Manga extends Component<Props> {

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

          <SectionHeader title={"Reading"} />
          <SectionManager navigation={this.props.navigation}  />

          <SectionHeader title={"Reading"} />
                <View style={styles.example}>
          </View>    

          <SectionHeader title={"Reading"} />
          

          <SectionHeader title={"Reading"} />
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

