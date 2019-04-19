import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import SectionManager from './SectionManager'
import firebase from '../../Firebase';
import { SearchBar } from 'react-native-elements';
import Discover from '../Discover'
import Icon from "react-native-vector-icons/Entypo";

export default class Anime extends Component<Props> {

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
        { key: 2, title: "Completed", arrow: 'chevron-down' },
        { key: 3, title: "On Hold", arrow: 'chevron-down' },
        { key: 4, title: "Dropped", arrow: 'chevron-down' },
        { key: 5, title: "Plan To Watch", arrow: 'chevron-down' },
      ]
    }
  }

  componentDidMount(){
    const materialData = [];

    firebase.firestore().collection('Material').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          mdata = doc.data();
          mdata.id = doc.id;
          materialData.push(mdata);
        });
      }).then(() => {
        this.setState({
          material: materialData
        })
      })

  }

  getData(savedAs){
    var data = this.state.material
    return data.filter(data => data.saved == savedAs);
  }

  filterSearch(text){
    const newData = this.state.material.filter((item)=>{
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
            <View style={{flex: 1}}>
            <SectionManager navigation={this.props.navigation} section={item} itemList={this.getData(item.title)} title={item.title} count={"3"} />
            </View>
          );
      });
  }


  render() {
    return (
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
        <View style={{flex: 10, backgroundColor: '#326D69'}}>      
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
