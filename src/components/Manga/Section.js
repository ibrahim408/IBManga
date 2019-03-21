import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";


class Section extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'green'}}>
            </View>
        );
    }
}
export default Section;

const styles = StyleSheet.create({
    card: {
        height: 185, 
        width: '100%', 
        marginLeft: 10,
        marginTop: 15,
        backgroundColor: 'orange'
    }
});