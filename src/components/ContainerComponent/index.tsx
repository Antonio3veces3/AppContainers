/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Containers } from '../../data/DataContainers';
const image = require('../../assets/images/detailImage.png');

interface Props{
    id: string,
    origin: string,
    destination: string,
    transport: string,
    category: string,
    onClick: (id: typeof Containers) => void;
}

const Component = (props:Props) => {
   const {id, origin, destination, transport,onClick} = props;
   const [iconName, setIconName] = useState('');

    useEffect(() => {
        switch (transport){
            case 'Train':
                setIconName('train');
                break;
            case 'Ship':
                setIconName('ferry');
                break;
            case 'Trailer':
                setIconName('truck');
                break;
        }

}, []);
    return (
        <TouchableHighlight style={styles.ContainerMain} onPress={ () => onClick(id)}>
            <>
                <View style={styles.ContainerImage}>
                    <ImageBackground source={image} style={styles.Image}>
                        <View style={styles.ContainerId}>
                                <Text style={styles.ContainerId}>
                                Container: {id}
                                </Text>
                        </View>
                        <View style={styles.Container}>
                                <View style={styles.Icon}>
                                <Icon
                                    name={iconName}
                                    type={'material-community'}
                                    color='white'
                                    size={35}
                                />
                            </View>
                            <View style={styles.Place}>
                                <Text style={styles.PlaceText}>From</Text>
                                <Text style={styles.DestinationPlace}>{origin}</Text>
                            </View>

                            <View style={styles.Place}>
                                <Text style={styles.PlaceText}>To place</Text>
                                <Text style={styles.DestinationPlace}>{destination}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    ContainerMain: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius:20,
        height: 100,
        backgroundColor: '#416a85',
        margin:5,
    },
    Container:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        textAlign: 'center',
        padding:5,
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
        color :'white',
        fontSize:18,
    },
    Icons: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        textAlign:'center',
    },
    TextIcon: {
        letterSpacing: -2,
        color:'white',
    },
    PlaceText: {
        color:'white',
        fontSize:15,
    },
    DestinationPlace: {
        color:'white',
        fontSize:18,
        fontFamily: 'bold',
    },
    Image: {
        width:'100%',
        height:'100%',
    },
    ContainerImage: {
        width: '100%',
        height: 100,
    },
});


export default Component;
