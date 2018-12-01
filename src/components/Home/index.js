import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import GridView from 'react-native-super-grid';

// source= {require("../../img/bike2.jpeg")}
//source= {{ uri: "//" }}

              // <Image
              //   style={{flex: 1, width: null, width: null, borderRadius: 5}}
              //   source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              // />
export default class Home extends Component<Props> {
  render() {
    
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c', image: require('../../img/1.jpg') }, { name: 'EMERALD', code: '#2ecc71', image: require('../../img/11.jpg') },
      { name: 'PETER RIVER', code: '#3498db', image: require('../../img/2.jpg') }, { name: 'AMETHYST', code: '#9b59b6', image: require('../../img/12.jpg') },
      { name: 'WET ASPHALT', code: '#34495e', image: require('../../img/3.jpg') }, { name: 'GREEN SEA', code: '#16a085', image: require('../../img/13.jpg') },
      { name: 'NEPHRITIS', code: '#27ae60', image: require('../../img/4.jpg') }, { name: 'BELIZE HOLE', code: '#2980b9', image: require('../../img/14.jpg') },
      { name: 'WISTERIA', code: '#8e44ad', image: require('../../img/5.jpg') }, { name: 'MIDNIGHT BLUE', code: '#2c3e50', image: require('../../img/15.jpg') },
      { name: 'SUN FLOWER', code: '#f1c40f', image: require('../../img/6.jpg') }, { name: 'CARROT', code: '#e67e22', image: require('../../img/16.jpg') },
      { name: 'ALIZARIN', code: '#e74c3c', image: require('../../img/7.jpg') }, { name: 'CLOUDS', code: '#ecf0f1', image: require('../../img/17.jpg') },
      { name: 'CONCRETE', code: '#95a5a6', image: require('../../img/8.jpg') }, { name: 'ORANGE', code: '#f39c12', image: require('../../img/18.jpg') },
      { name: 'PUMPKIN', code: '#d35400', image: require('../../img/9.jpg') }, { name: 'POMEGRANATE', code: '#c0392b', image: require('../../img/19.jpg') },
      { name: 'SILVER', code: '#bdc3c7', image: require('../../img/10.jpg') }, { name: 'ASBESTOS', code: '#7f8c8d', image: require('../../img/20.jpg') },
    ];
    
    return (
        <GridView
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={item => (
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Image
                style={{flex: 1, width: null, width: null, borderRadius: 5}}
                source={item.image}
              />
            </View>
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
