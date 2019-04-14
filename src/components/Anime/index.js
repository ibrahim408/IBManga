import React, {Component} from 'react';
import { Dimensions, Platform, StyleSheet, FlatList, Text, View, Image, TouchableOpacity, SectionList,ScrollView} from 'react-native';
import SectionManager from './SectionManager'
import SectionHeader from './SectionHeader'
import firebase from '../../Firebase';

export default class Anime extends Component<Props> {

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

  getData(savedAs){
    var data = this.state.material
    return data.filter(data => data.saved == savedAs);
  }

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
          <SectionManager navigation={this.props.navigation} itemList={this.getData("Reading")}  />
          <SectionHeader title={"Completed"} count={"3"} /> 
          <SectionManager navigation={this.props.navigation}  itemList={this.getData("Completed")}  />             
          <SectionHeader title={"On Hold"} count="3" /> 
          <SectionManager navigation={this.props.navigation}  itemList={this.getData("On Hold")}  />                     
          <SectionHeader title={"Dropped"} count="3" />
          <SectionManager navigation={this.props.navigation}  itemList={this.getData("Dropped")}  />          
          <SectionHeader title={"Plan To Watch"} count="4" />
          <SectionManager navigation={this.props.navigation}  itemList={this.getData("Plan To Watch")}  />          
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

