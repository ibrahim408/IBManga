import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList
} from 'react-native';

export default class List extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      data:[
	        {
	          title:"A", 
	          data:[
	            {key:1, name:'Attack no Titan', image: require('../../img/a_1.jpg')},
	            {key:2, name:'Ao No Exoricist', image: require('../../img/a_2.jpg')},
	            {key:3, name:'Akame ga Kill', image: require('../../img/a_3.jpg')},
	          ]
	        },
	        {
	          title:"B", 
	          data:[
	            {key:1, name:'Boku on Hero Acadmeia', image: require('../../img/b_1.jpg')},
	            {key:2, name:'Berserk', image: require('../../img/b_2.jpg')},
	            {key:3, name:'Bleach', image: require('../../img/b_3.jpg')},
	          ]
	        },
	        {
	          title:"D", 
	          data:[
	            {key:1, name:'Douluo Dalu II', image: require('../../img/d_1.jpg')},
	            {key:2, name:'Dragon Ball Super', image: require('../../img/d_2.jpg')},
	            {key:3, name:'Detecative Conan', image: require('../../img/d_3.jpg')},
	          ]
	        },
	        {
	          title:"N", 
	          data:[
	            {key:1, name:'Nanatsu on Taizai', image: require('../../img/n_1.jpg')},
	            {key:2, name:'Naruto Boruto', image: require('../../img/n_2.jpg')},
	            {key:3, name:'Naruto', image: require('../../img/n_3.jpg')},
	          ]
	        },
	      ]
	    }
	}	

	render(){
		return(
	      <View style={styles.container}>
	        <SectionList
	          sections={this.state.data}
	          renderSectionHeader={({section}) => {
	            return (
	              <View style={styles.titleContainer}>
	                <Text style={styles.title}>
	                  {section.title}
	                </Text>
	              </View>
	            )
	          }}
	          renderItem={({item}) => {
	            return (
	            <View style={styles.container}>
	              <TouchableOpacity onPress={() => {}}>
	                <Image style={styles.image} source={item.image}/>
	              </TouchableOpacity>
	              <View style={styles.content}>
	                <View style={styles.contentHeader}>
	                  <Text  style={styles.name}>{item.name}</Text>
	                </View>
	              </View>
	            </View>
	            )
	        }}/>
	      </View>
		);
	}
}

const styles = StyleSheet.create({
  root:{
    marginTop:20,
    padding:10,
  },
  titleContainer:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#DCDCDC",
    padding:10
  },
  title:{
    fontSize:25,
    color:"#000000"
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:55,
    height:55,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});