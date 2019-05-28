import React, {Component} from 'react';
import {} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {AppNavigator} from './config/navigation'
import { connect } from "react-redux";
import {getMaterials, getCharacters} from './redux/actions/App'
import Configer from 'react-native-config'


const mapDispatchToProps = {
  getCharacters,
  getMaterials,
}

class IBManga extends Component {
  
  constructor() {
    super();
  }

  componentDidMount(){
  	this.props.getMaterials();
  	this.props.getCharacters();
  }

  render() {    
    return (
      <AppContainer />
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);
export default connect( null, mapDispatchToProps )(IBManga);
