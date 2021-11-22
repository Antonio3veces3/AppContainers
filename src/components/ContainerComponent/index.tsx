/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props{
    id: string,
    origin: string,
    destination: string,
}

const Component = () => {
   /* const {id, origin, destination} = props;*/
    return (
        <View style={styles.ContainerMain}>
            <View style={styles.ContainerId}>
                <Text style={styles.ContainerId}>
                Container: id
                </Text>
            </View>
            <View style={styles.Container}>
                <View style={styles.Icon}>
                <Text>Icono</Text>
            </View>
            <View style={styles.Place}>
                <Text>From</Text>
                <Text>Guadalajara</Text>
            </View>
            <View style={styles.Icon}>
                <Text>Iconos</Text>
            </View>
            <View style={styles.Place}>
                <Text>To place</Text>
                <Text>Colima</Text>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerMain: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'center',
        borderColor: 'white',
        borderWidth: 2,
        height: 100,
    },
    Container:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        textAlign: 'center',

    },
    Place: {
        display:'flex',
        flexDirection:'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    Icon: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    ContainerId: {
        justifyContent:'center',
        textAlign:'center',
    },
});


export default Component;
