import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Components/Constant';
import { SafeAreaView } from 'react-native-safe-area-context';
class BannerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let banner = [
            {
                title: "Metal City",
                img: require('../img/icon.jpg'),
            },
            {
                title: "2 Metal City",
                img: require('../img/SpadeFacebook.png'),
            },
            {
                title: "Metal City",
                img: require('../img/icon.jpg'),
            },
            {
                title: "2 Metal City",
                img: require('../img/SpadeFacebook.png'),
            }
        ]
        return (
            <SafeAreaView>
                <FlatList
                    data={banner}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <View style={styles.imgBlock}>
                                    <ImageBackground source={item.img} style={styles.img} />
                                </View>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        );
    }
}

export default BannerComponent;

const styles = StyleSheet.create({
    img: {
        borderRadius: 50,
        width: SCREEN_WIDTH - 50,
        height: SCREEN_HEIGHT / 4,
    },
    imgBlock: {
        alignItems: "center",
        justifyContent: "center",
        width: SCREEN_WIDTH,
        marginVertical: 15,
    },
});