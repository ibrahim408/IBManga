import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import MangaInfoDetail from './MangaInfoDetail'

export default class MangaInfo extends React.Component{
	render(){

		return(
			<View style={styles.container}>
				<MangaInfoDetail />		

				<View style={styles.subContainer2}>
				</View>
				
				<View style={styles.subContainer3}>
				</View>								
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    height: 400,
    backgroundColor: 'red'
  },
  subContainer2:{
  	flex: 1,
  	backgroundColor: 'blue'
  },
  subContainer3:{
  	flex: 2,
  	backgroundColor: 'green'
  }
});