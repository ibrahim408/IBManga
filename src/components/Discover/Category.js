import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";


class Category extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MangaDetail',{item: 3}, {title: 'WHATEVER'})}>
                    <View style={styles.card}>
                        <View style={{ flex: 4 }}>
                            <Image source={this.props.imageUri}
                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 10 }}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{paddingLeft: 5, paddingTop: 2}}>
                                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                                    {this.props.title}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    card: {
        height: 185, 
        width: 100, 
        marginLeft: 10,
        marginTop: 15,

    }
});