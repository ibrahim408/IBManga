import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Characters from './Characters'
import firebase from '../../Firebase';
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
  return {
    allCharacters: state.characters.allCharacters,
  }
}

class MangaInfoCharacters extends React.Component{
	
	  constructor(props){
	    super(props);
	    this.state = {
	      material: [],
	    }
	  }

	  getData(Anime){
	  	if (!this.props.allCharacters) return this.props.allCharacters;
	    var data = this.props.allCharacters
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

export default connect(mapStateToProps,null)(MangaInfoCharacters);
