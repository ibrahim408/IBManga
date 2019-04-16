import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Characters from './Characters'

export default class MangaInfoCharacters extends React.Component{
	  getData() {
	    return [
	      {
	        key: 1, title: 'Albert Einstein',
	        description: 'Video 00:34',
	        image_url: require('../../img/1.jpg')
	      },
	      {
	        key: 2,
	        title: 'Isaac newton',
	        description: 'Video 00:34',
	        image_url: require('../../img/2.jpg')
	      },
	      {
	        key: 3, title: 'Albert Einstein',
	        description: 'Video 00:34',
	        image_url: require('../../img/3.jpg')
	      },
	      {
	        key: 4,
	        title: 'Isaac newton',
	        description: 'Video 00:34',
	        image_url: require('../../img/2.jpg')
	      },
	      {
	        key: 5, title: 'Albert Einstein',
	        description: 'Video 00:34',
	        image_url: require('../../img/3.jpg')
	      }
	    ]
	  }

	render(){
		return(
			<View style={{height: 170, width: '100%', marginLeft: 5}}>
				<FlatList
					style={{
					}}
					horizontal={true}
					data={this.getData()}
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