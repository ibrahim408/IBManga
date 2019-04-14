import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, Button,ScrollView, ImageBackground} from 'react-native';
import { BlurView, VibrancyView } from 'react-native-blur';
import MangaInfo from './MangaInfo'

export default class MangaDetail extends React.Component{
	render(){
		const { navigation } = this.props;
	    const item = navigation.getParam('item', 'NO-ID');

	    console.log("bigMoMovesOnly",item);


		return(
			<View style={{flex: 1}}>
				<ImageBackground
					style={{flex: 1}}
					blurRadius={5}
					source={{uri: item.image}}
				>			
					<ScrollView>
						<MangaInfo item={item} />																
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