import React, {Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import firebase from '../../Firebase';

export default class FirebaseTest extends Component{

	readUserData() {
		var docRef = firebase.firestore().collection("users").doc("mxx15dEsprlJUP1JrHPT");

		docRef.get().then(function(doc) {
		    if (doc.exists) {
		        console.log("Document data:", doc.data());
		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
		}).catch(function(error) {
		    console.log("Error getting document:", error);
		});
	}

	render(){
		this.readUserData();

		return(
			<View style={styles.container}>
				<Text>
					Firebase shit this aint it 
				</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});