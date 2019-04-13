import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import CategoryManager from './CategoryManager'
import firebase from '../../Firebase';

export default class Discover extends Component<Props> {
  
  constructor(props){
    super(props);
    this.state = {
      material: [],
    }
  }

  componentDidMount(){
    const materialData = [];

    firebase.firestore().collection('Material').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          console.log("checkingOneTimeFam", doc.data());
          materialData.push(doc.data());
        });
      }).then(() => {
        this.setState({
          material: materialData
        })
      })
  }

  render() {
    console.log("ibeatTheCASE", this.state.material);


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
          <CategoryManager category={"SEASONAL - WINTER 2019"} itemList={this.state.material} navigation={this.props.navigation}  /> 
          <CategoryManager category={"TOP RANDKED ANIME"} itemList={this.state.material} navigation={this.props.navigation} /> 
          <CategoryManager category={"TOP AIRING ANIME"} itemList={this.state.material} navigation={this.props.navigation} /> 
          <CategoryManager category={"MOST POPULAR ANIME"} itemList={this.state.material} navigation={this.props.navigation} /> 
          <CategoryManager category={"TOP RANKED BOOKS"} itemList={this.state.material} navigation={this.props.navigation} /> 
          <CategoryManager category={"MOST POPULAR MANGA"} itemList={this.state.material} navigation={this.props.navigation} /> 
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

