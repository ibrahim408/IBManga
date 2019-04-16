import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from "react-native";


class Characters extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <View style={styles.imageStyle}>
                        <Image
                            style={{flex: 1, width: undefined, height: undefined}}
                            borderRadius={5}
                            source={this.props.item.image_url}
                            />
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: 'white'}}>Dororo
                        </Text>
                    </View>
                    <View style={styles.roleContainer}>
                        <Text style={{fontSize: 12, color: 'white'}}>Main
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: 100,
        margin: 2,
        marginBottom: 50,
        borderRadius: 4,
    },
    imageContainer: {
        flex: 8,
    },
    imageStyle:{
        flex: 1,
        margin: 2
    },
    detailContainer: {
        flex: 2,
    },
    nameContainer: {
        flex: 1,
    },
    roleContainer: {
        flex: 1,
    }
});

export default Characters;

