import React, {Component} from 'react'
import {Alert, Platform, StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';
import MangaInfoDetail from './MangaInfoDetail'
import MangaInfoCharacters from './MangaInfoCharacters'
import ModalFilterPicker from 'react-native-modal-filter-picker'
import firebase from '../../Firebase';
import {updateMaterial, getMaterials} from '../../redux/actions/App'
import { connect } from "react-redux";

const mapDispatchToProps = {
  updateMaterial,
  getMaterials
}

const mapStateToProps = function(state) {
  return {
    allMaterial: state.material.allMaterial,
  }
}


class MangaInfo extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			picked: null,
			visible: false,
			list: [
				{key: 'Plan To Watch', label: 'Plan To Watch'},
				{key: 'Watching', label: 'Watching'},
				{key: 'On Hold', label: 'On Hold'},
				{key: 'Dropped', label: 'Dropped'},
				{key: 'Completed', label: 'Completed'},
				{key: 'Rewatching', label: 'Rewatching'},
			]
		}
	}	

  componentDidMount(){
  	console.log("looking for bleach",this.props.allMaterial[0]);
  }

	updateSaveValue = (savedAs) => {
		this.props.updateMaterial(this.props.item.key, savedAs);
		this.props.getMaterials();
	}

	addToList(){
		Alert.alert('You tapped the button!')
	}

    onShow = () => {
    	this.setState({ visible: true });
    }

    onSelect = (picked) => {
    	this.updateSaveValue(picked);

    	this.setState({
    		picked: picked,
    		visible: false
    	})
    }

    onCancel = () => {
    	this.setState({
    		visible: false
    	});
    }

	render(){
		var currentMaterial;
		if(this.props.allMaterial){
			currentMaterial = this.props.allMaterial.find( material => material.title === this.props.item.title );
		}

		const {visible, picked} = this.state;
        var saved = currentMaterial.saved;
		if(this.props.item.saved == null || this.props.item.saved == "undefined"){
			saved = "ADD TO LIST?"
		}

		return(
			<View style={{flex: 1}}>
				<View style={styles.container}>
					<MangaInfoDetail item={this.props.item} />		

					<View style={styles.subContainer2}>
						<View style={{flex: 1, justifyContent: 'center'}}>
							<View style={{height: 40, margin: 5, borderRadius: 4, opacity: 0.5, backgroundColor: '#888888'}}>
								<Button
									onPress={this.onShow}
									title={saved}
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
									<ModalFilterPicker
							          visible={visible}
							          onSelect={this.onSelect}
							          onCancel={this.onCancel}
							          options={this.state.list}
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
						<Text style={{color: 'white'}}>{this.props.item.description}
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
				<View style={{height: 20, width: '100%'}}>
					<View style={styles.characterSectionHeader}>
						<Text style={{ fontSize: 14, color: 'white'}}> CHARACTERS
						</Text>
					</View>
				</View>
				<MangaInfoCharacters animeTitle={this.props.item.key} />
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
  	flex: 2,
	paddingLeft: 15,
    marginRight: 15
  },
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'#888888',
        margin:30,
   },
   extraDetailDos: {
   	height: 200,
   	flexDirection: 'column',
   },
   characterSectionHeader:{
   	marginLeft: 5
   }
});

export default connect( mapStateToProps, mapDispatchToProps )(MangaInfo);