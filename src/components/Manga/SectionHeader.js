import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";


const SectionHeader = ({title}) => {
    
  return (
    <View style={styles.section}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.title}>
          <View style={styles.textContainer}>
            <Text style={{color: '#FFFFFF', fontSize: 15,}}> {title}
            </Text>
          </View>
        </View>
        <View style={styles.arrowIcon}>
          <View style={styles.arrow}>
            <Icon
              name="chevron-down"
              color="#FFFFFF"
              size={45}
              onPress={this.puasePressd}
            />          
          </View>
        </View>       
      </View>                                                                                                                
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    height: 50,
    width: '100%',
    backgroundColor: '#121317',
    opacity: .5
  },
  title: {
    width: 100,
    height: '100%'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',       
  },
  arrowIcon: {
    marginRight: 33,
    width: 50,
    height: '100%'    
  },
  arrow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },  
});

export default SectionHeader;