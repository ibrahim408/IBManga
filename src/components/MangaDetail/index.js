import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, Button,ScrollView, ImageBackground} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import MangaInfo from './MangaInfo'

export default class MangaDetail extends React.Component{
	render(){
		const { navigation } = this.props;
	    const item = navigation.getParam('item', 'NO-ID');

		return(
			<View style={{flex: 1}}>
				<ImageBackground
					style={{flex: 1}}
					blurRadius={30}
					source={require('../../img/13.jpg')}
				>			
					<ScrollView>
						<MangaInfo />																
					</ScrollView>								
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ccffcc'
  }
});