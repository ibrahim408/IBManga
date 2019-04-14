import React, {Component} from 'react'
import {Alert, Platform, StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';
import MangaInfoDetail from './MangaInfoDetail'

export default class MangaInfo extends React.Component{
	
	addToList(){
		Alert.alert('You tapped the button!')
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<View style={styles.container}>
					<MangaInfoDetail item={this.props.item} />		

					<View style={styles.subContainer2}>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<View style={{height: 40, margin: 5, borderRadius: 4, opacity: 0.5, backgroundColor: '#888888'}}>
								<Button
									onPress={this.addToList}
									title="ADD To List?"
									color="white"
								/>
							</View>		
						</View>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<View style={{height: 40, margin: 5, borderRadius: 4, opacity: 0.5, backgroundColor: '#888888'}}>
								<Button
									onPress={this.addToList}
									title="-/- CH"
									color="white"
								/>
							</View>						
						</View>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<View style={{ height: 40, margin: 5, borderRadius: 4, opacity: 0.5, backgroundColor: '#888888'}}>
								<Button
									onPress={this.addToList}
									title="NOT SCORED"
									color="white"
								/>
							</View>						
						</View>										
					</View>
					
					<View style={styles.subContainer3}>
						<Text> Naruto (ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becoming the Hokage, the leader of his village. The story is in two parts, the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).
						</Text>
					</View>	

					<View style = {styles.lineStyle} />						
				</View>

				<View style={styles.extraDetailDos}>
					<View style={{flex: 1, margin: 5}}>
						<Text style={{color: "#414141"}}> Japanese
						</Text>
						<Text style={{color: 'white'}}> 去変ニアトウ聞
						</Text>						
					</View>
					<View style={{flex: 1, margin: 5}}>
						<Text style={{color: "#414141"}}> ENGLISH
						</Text>
						<Text style={{color: 'white'}}> {this.props.item.title}
						</Text>						
					</View>
					<View style={{flex: 1, margin: 5}}>
						<Text style={{color: "#414141"}}> AIRED
						</Text>
						<Text style={{color: 'white'}}> Oct 7, 1997 - Mar 31, 1998
						</Text>						
					</View>
					<View style = {styles.lineStyle} />	
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
  },
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'#888888',
        margin:30,
   },
   extraDetailDos: {
   	height: 200,
   	flexDirection: 'column',
   }
});