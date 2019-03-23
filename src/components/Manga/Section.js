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
            <View style={{height: 100, backgroundColor: 'green'}}>
                                    <View style={{height: 33, backgroundColor: 'pink'}}>
                        </View>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'green'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MangaDetail',{item: 3}, {title: 'WHATEVER'})}>
                        <View style={{flex: 1, backgroundColor: 'yellow'}}>
                        </View>
                        <View style={styles.infoCard}>
                        </View>
                        <View style={{height: 33, backgroundColor: 'pink'}}>
                        </View>
                    </TouchableOpacity>
                </View>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageCard: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    infoCard: {
        flex: 4,
        backgroundColor: 'pink'
    }
});

export default Section;

