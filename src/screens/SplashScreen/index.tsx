/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = require('../../assets/images/splash.jpeg');

interface Props extends NativeStackScreenProps<any, any>{}

const Component = (props: Props) => {
    const {navigation} = props;

    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Login');
        }, 3000);
    },[]);

    return (
        <View style={styles.Container}>
      <ImageBackground source={image} style={styles.Image} />
      <Text style={styles.Title}>MODAT APPS</Text>
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
    Title: {
      position: 'absolute',
      marginTop: 550,
      color: 'white',
      fontSize: 40,
      alignSelf: 'center',
      fontWeight: 'bold',
      letterSpacing: 4,
    },
  });
export default Component;
