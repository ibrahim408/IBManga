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
    var thisEpisode = Number(this.props.item.episodes );    
    var nextEpisode = thisEpisode + 1;
    var AirsIn = Math.floor(Math.random() * 14) + 1 ;
    
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MangaDetail',{item: this.props.item}, {title: 'WHATEVER'})}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageStyling}>
                            <Image
                                style={{flex:1, height: null, width: null,borderRadius: 2}}
                                resizeMode={'stretch'}
                                source={{uri: this.props.item.image}}
                                />
                        </View>
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={styles.topDetailContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={{fontSize: 24, color: 'white'}}> {this.props.item.title}
                                </Text>
                            </View>
                            <View style={styles.epsiodeContainer}>
                                <Text style={{fontSize: 12, color: 'white'}}> {this.props.item.episodes} episodes 
                                </Text>
                            </View>
                        </View>
                        <View style={styles.bottomDetailContainer}>
                            <View style={{height: '50%'}}>
                                <View style={styles.bottomDetailContainerTextSytling}>
                                    <View style={{width: "30%", height: "100%"}}>
                                        <Text style={{fontSize: 20, color: 'white'}}> *
                                        </Text>
                                    </View>
                                    <View style={{ width: '50%', height: "100%"}}>
                                        <Text style={{fontSize: 12, color: 'green'}}> Epsidoe {nextEpisode} airs in {AirsIn} days
                                        </Text>                                
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>           
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyling: {
        height: '95%',
        width: '70%',
        overflow: 'hidden',
    },
    detailContainer: {
        flex: 6,
    },
    topDetailContainer: {
        flex: 1,
    },
    bottomDetailContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    titleContainer: {

    },
    epsiodeContainer: {

    },
    bottomDetailContainerTextSytling:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Section;

