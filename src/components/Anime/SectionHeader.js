import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";


const SectionHeader = ({title, count}) => {
    
  return (
    <View style={styles.section}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.title}>
          <View style={styles.textContainer}>
            <Text style={{color: '#FFFFFF', fontSize: 15, alignSelf: 'flex-start'}}> {title}
            </Text>
          </View>
        </View>
        <View style={styles.arrowIcon}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 14, color: "white"}}> {count}
              </Text>
            </View>
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

export default SectionHeader;