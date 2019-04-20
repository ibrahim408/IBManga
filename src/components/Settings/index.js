import React, {Component} from 'react'
import {View,Text,StyleSheet, Image, Alert, Dimensions} from 'react-native'
import SettingsList from 'react-native-settings-list';
import Icon from "react-native-vector-icons/AntDesign";

export default class Settings extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="setting" size={30} color="grey" />
    )
  };

	render(){
		return(
		    <View style={{backgroundColor:'#EFEFF4',flex:1}}>

		
        <View>
          <Image
            style={{
              height: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              position: 'absolute',
              opacity: 1,
            }}
            source={require('../../img/background4.png')}
          />          
        </View> 
		      <View style={{backgroundColor:'transparent',flex:1, zIndex: 0}}>
		        <SettingsList backgroundColor='transparent' borderColor='white' defaultItemSize={55}>
		          <SettingsList.Header headerStyle={{marginTop:15}}/>
		          <SettingsList.Item
		            icon={
		                <Image style={styles.imageStyle} source={require('../../img/general.png')}/>
		            }
		            switchOnValueChange={this.onValueChange}
		            hasNavArrow={false}
		            title='General'
		            titleStyle={{color: 'white'}}
		          />
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/iconSix.png')}/>}
		            title='Appearance'
		            titleStyle={{color: 'white'}}
		            titleInfo='Mirai'
		            titleInfoStyle={styles.titleInfoStyle}
		            onPress={() => Alert.alert('Route to Wifi Page')}
		          />
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/iconSeven.png')}/>}
		            title='Passcode'
		            titleStyle={{color: 'white'}}
		            titleInfoStyle={styles.titleInfoStyle}
		            onPress={() => Alert.alert('Route to Blutooth Page in progress')}
		          />
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/iconThree.png')}/>}
		            title='Cellular'
		            titleStyle={{color: 'white'}}
		            onPress={() => Alert.alert('Route To Cellular Page in progress')}
		          />
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/twitter.png')}/>}
		            title='twitter'
		            titleStyle={{color: 'white'}}
		            onPress={() => Alert.alert('Route To Do Not Disturb Page in progress')}
		          />		          
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/iconFour.png')}/>}
		            title='Notifications'
		            titleStyle={{color: 'white'}}
		            titleInfo='Off'
		            titleInfoStyle={styles.titleInfoStyle}
		            onPress={() => Alert.alert('Route To Hotspot Page in progress')}
		          />
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/iconTwo.png')}/>}
		            title='Rate IBManga'
		            titleStyle={{color: 'white'}}
		            onPress={() => Alert.alert('Route To Notifications Page in progress')}
		          />
		          <SettingsList.Item
		            icon={<Image style={styles.imageStyle} source={require('../../img/iconOne.png')}/>}
		            title='About'
		            titleStyle={{color: 'white'}}
		            onPress={() => Alert.alert('Control Center Page in progress')}
		          />
		        </SettingsList>
		      </View>
		    </View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		backgroundColor: 'pink',
		flex: 1,
	},
	imageStyle:{
		marginLeft:15,
		marginRight:20,
		alignSelf:'center',
		width:24,
		height:28,
		justifyContent:'center'
	}
});