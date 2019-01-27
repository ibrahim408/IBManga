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

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MangaDetail',{item: 1})}
                    style={{
                        position: 'absolute',
                        zindex: 0,
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'red'
                    }}
                >
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={{ flex: 4 }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 15 }}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{paddingLeft: 5, paddingTop: 2}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                                Naruto
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    card: {
        height: 165, 
        width: 90, 
        marginLeft: 20,
        marginTop: 15
    }
});