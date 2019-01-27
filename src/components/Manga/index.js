import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Manga extends Component{
	render(){
		return(
			<View style={styles.container}>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		backgroundColor: 'purple',
		flex: 1,
	}
});