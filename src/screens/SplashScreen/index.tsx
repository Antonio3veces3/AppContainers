/* eslint-disable prettier/prettier */
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const image = require('../../assets/images/SplashImage.jpeg');

const Component = () => {
    return (
        <View style={styles.Container}>
            <ImageBackground source={image} style={styles.Image}  />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Image: {
        flex: 1,
    },
});

export default Component;
