import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class MangaInfoDetail extends React.Component{
	render(){

		return(
				<View style={styles.container}>
					<View style={styles.containerImage}>
						<Image
							style={{flex: 1 , width: undefined, height: undefined}}
							borderRadius={5}
              source={{uri: this.props.item.image}}
						/>
					</View>
					<View style={styles.containerDetail}>

            <View style={styles.containerDetailOne}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={{fontSize: 12, color: 'grey'}}> TYPE
                    </Text>
                    <Text style={{fontSize: 12, color: 'white'}}> Mange
                    </Text>                    
                  </View>
                </View>
                <View style={{flex:1}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={{fontSize: 12, color: 'grey'}}> VOLUMES
                    </Text>
                    <Text style={{fontSize: 12, color: 'white'}}> 92
                    </Text>                    
                  </View>                
                </View>
                <View style={{flex:1}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={{fontSize: 12, color: 'grey'}}> CHAPTERS
                    </Text>
                    <Text style={{fontSize: 12, color: 'white'}}> 876
                    </Text>                    
                  </View>                
                </View>                                
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex:1}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={{fontSize: 12, color: 'grey'}}> AUTHOR
                    </Text> 
                    <Text style={{fontSize: 12, color: 'white'}}> Eiichiro Oda
                    </Text>
                  </View>
                </View>
                <View style={{flex:1}}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={{fontSize: 12, color: 'grey'}}> PUBLISHED
                    </Text>
                    <Text style={{fontSize: 12, color: 'white'}}> {this.props.item.published}
                    </Text>
                  </View>
                </View>              
              </View>
            </View>
          
            <View style={styles.containerDetailTwo}>
              <Text style={{fontSize: 12, color: 'grey'}}> GENRE
              </Text>
              <Text style={{fontSize: 12, color: 'white'}}> Drama, Action, Adventure
              </Text>
            </View>
          
            <View style={styles.containerDetailThree}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text  style={{fontSize: 12, color: 'grey'}}> SCORE
                </Text>
                <Text  style={{fontSize: 20, color: 'white'}}> 9.00
                </Text>                
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text  style={{fontSize: 12, color: 'grey'}}> RANK
                </Text>
                <Text  style={{fontSize: 20, color: 'white'}}> #1
                </Text>               
              </View>                
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text  style={{fontSize: 12, color: 'grey'}}> POPU
                </Text>
                <Text  style={{fontSize: 20, color: 'white'}}> #3
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
  	justifyContent: 'flex-start'
  },
  containerImage:{
  	flex: 1,
  	margin: 12
  },
  containerDetail:{
  	flex: 2,
  	margin: 7
  },
  containerDetailOne:{
    flex: 5,
    flexDirection: 'column',
  },
  containerDetailTwo:{
    flex: 2,
    flexDirection: 'column',
  },
  containerDetailThree:{
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});