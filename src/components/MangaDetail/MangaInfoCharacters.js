import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Characters from './Characters'
import firebase from '../../Firebase';

export default class MangaInfoCharacters extends React.Component{

	  constructor(props){
	    super(props);
	    this.state = {
	      material: [],
	    }
	  }

	  componentDidMount(){
	    const materialData = [];

	    firebase.firestore().collection('Characters').get()
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

	  getData(Anime){
	    var data = this.state.material
	    return data.filter(data => data.Anime == Anime);
	  }


	render(){
		return(
			<View style={{height: 170, width: '100%', marginLeft: 5}}>
				<FlatList
					style={{
					}}
					horizontal={true}
					data={this.getData(this.props.animeTitle)}
					renderItem={({ item,index}) => {
					  return(
					    <Characters item={item} imageUri={require('../../img/13.jpg')} name="Naruto"/>
					  );
					}}
				/>			
			</View>
		);
	}
}