import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import SectionManager from './SectionManager'
import firebase from '../../Firebase';
import { SearchBar } from 'react-native-elements';
import Discover from '../Discover'
import Icon from "react-native-vector-icons/Entypo";
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
  return {
    allMaterial: state.material.allMaterial,
  }
}

class Anime extends Component<Props> {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="open-book" size={25} color="grey" />
    )
  };

  constructor(props){
    super(props);
    this.state = {
      material: [],
      text: '',
      section: [
        { key: 1, title: "Reading", arrow: 'chevron-right' },
        { key: 2, title: "Completed", arrow: 'chevron-right' },
        { key: 3, title: "On Hold", arrow: 'chevron-right' },
        { key: 4, title: "Dropped", arrow: 'chevron-right' },
        { key: 5, title: "Plan To Watch", arrow: 'chevron-down' },
      ]
    }
  }
  componentDidMount(){
    this.setState({ material: this.props.allMaterial });
  }

  getData(savedAs){
    if (!this.state.material) return this.state.material;
    var data = this.state.material
    return data.filter(data => data.saved == savedAs);
  }

  filterSearch(text){
    const searchMaterialWithText = Object.create(this.props.allMaterial);

    const newData = searchMaterialWithText.filter((item)=>{
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData)>-1
    });
    this.setState({
      material: newData,
      text:text
    });
  }


  renderSections() {
      return this.state.section.map((item) => {
          return (
            <View key={item.key} style={{flex: 1}}>
            <SectionManager key={item.key} navigation={this.props.navigation} section={item} itemList={this.getData(item.title)} title={item.title} count={"3"} />
            </View>
          );
      });
  }


  render() {
    return (
      <View style={{flex: 1}}>
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
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, height: 58, width: '100%', backgroundColor: 'red'}}>
            <SearchBar
              round
              autoCorrect={false} 
              placeholder="Filter by name"
              onChangeText={text => this.filterSearch(text)}
              value={this.state.text}
            />
          </View>
          <View style={{flex: 10, backgroundColor: 'transparent'}}>      
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
            {this.renderSections()}  
          </View>
        </ScrollView>
      </View>
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

export default connect(mapStateToProps,null)(Anime);
