import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import MangaInfoDetail from './MangaInfoDetail'

export default class MangaInfo extends React.Component{
	render(){

		return(
			<View style={styles.container}>
				<MangaInfoDetail />		

				<View style={styles.subContainer2}>
					<View style={{flex: 1, justifyContent: 'center'}}>
						<View style={{height: 40, margin: 5, backgroundColor: 'green'}}>
						</View>		
					</View>
					<View style={{flex: 1, justifyContent: 'center'}}>
						<View style={{height: 40, margin: 5, backgroundColor: 'green'}}>
						</View>						
					</View>
					<View style={{flex: 1, justifyContent: 'center'}}>
						<View style={{ height: 40, margin: 5, backgroundColor: 'green'}}>
						</View>						
					</View>										
				</View>
				
				<View style={styles.subContainer3}>
					<Text> Naruto (ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becoming the Hokage, the leader of his village. The story is in two parts, the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).
					</Text>
				</View>								
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    height: 400
  },
  subContainer2:{
  	flex: 1,
  	flexDirection: 'row'
  },
  subContainer3:{
  	flex: 2
  }
});