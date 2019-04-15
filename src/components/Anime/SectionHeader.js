import React, {Component} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";
import Section from './Section'

export default class SectionHeader extends Component<Props> { 
  
  constructor(props){
    super(props);
    this.state = {
      arrow: 'chevron-down'
    }
    this.arrowPressed = this.arrowPressed.bind(this);
  } 

  arrowPressed(){
    if(this.state.arrow == "chevron-down"){
      this.setState({
        arrow: 'chevron-right'
      })
      return;  
    }
    this.setState({
      arrow: 'chevron-down'
    })  
  }

  renderSection(){
    if(this.state.arrow == "chevron-down"){
      return(
        <View style={{height: 200, backgroundColor: 'transparent' }}>
          <FlatList
            style={{
            }}
            horizontal={false}
            data={this.props.itemList}
            renderItem={({ item,index}) => {
              return(
                <Section navigation={this.props.navigation} item={item} index={index} imageUri={require('../../img/13.jpg')} name="Naruto"/>
              );
            }}
          />
        </View>
      )
    }
  }

  render(){
    return (
      <View style={{flex:1}}>
      <TouchableOpacity onPress={this.arrowPressed}>
      <View style={styles.section}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.title}>
            <View style={styles.textContainer}>
              <Text style={{color: '#FFFFFF', fontSize: 15, alignSelf: 'flex-start'}}> {this.props.title}
              </Text>
            </View>
          </View>
          <View style={styles.arrowIcon}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color: "white"}}> {this.props.count}
                </Text>
              </View>
              <View style={styles.arrow}>
                  <Icon
                    name={this.state.arrow}
                    color="#FFFFFF"
                    size={45}
                    onPress={this.puasePressd}
                  />           
              </View>

            </View>
          </View>       
        </View>                                                                                                                
      </View>
      </TouchableOpacity>
      {this.renderSection()}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  section: {
    height: 50,
    width: '100%',
    backgroundColor: '#121317',
    opacity: .5
  },
  title: {
    width: 150,
    height: '100%'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',       
  },
  arrowIcon: {
    marginRight: 20,
    width: 100,
    height: '100%'   
  },
  arrow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },  
});
