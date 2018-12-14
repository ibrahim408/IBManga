import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class MangaInfoDetail extends React.Component{
	render(){

		return(
				<View style={styles.container}>
					<View style={styles.containerImage}>
						<Image
							style={{flex: 1 , width: undefined, height: undefined}}
							borderRadius={15}
							source={require('../../img/13.jpg')}
						/>
					</View>
					<View style={styles.containerDetail}>
            <View style={styles.containerDetailOne}>
            </View>
            <View style={styles.containerDetailTwo}>
            </View>
            <View style={styles.containerDetailThree}>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
                <Text> Score
                </Text>
                <Text> 9.00
                </Text>                
              </View>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'blue'}}>
                <Text> Rank
                </Text>
                <Text> #1
                </Text>               
              </View>                
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
                <Text> Popularity
                </Text>
                <Text> #3
                </Text>               
              </View>
            </View>                        
					</View>
				</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
  	flex: 3,
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	backgroundColor: 'pink'
  },
  containerImage:{
  	flex: 1,
  	backgroundColor: 'brown',
  	margin: 10
  },
  containerDetail:{
  	flex: 2,
  	backgroundColor: 'green',
  	margin: 10
  },
  containerDetailOne:{
    flex: 5,
    backgroundColor: 'orange'
  },
  containerDetailTwo:{
    flex: 2,
    backgroundColor: 'blue'
  },
  containerDetailThree:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black'
  }
});