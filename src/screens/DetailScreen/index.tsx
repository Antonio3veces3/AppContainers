/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import DetailComponent from '../../components/DetailComponent';
import { Containers } from '../../data/DataContainers';
import { useState } from 'react';
const image = require('../../assets/images/detailImage.png');
const Component = () => {
    const [iconName, setIconName] = useState('');
    useEffect(() => {
        switch (Containers[0].transport){
            case 'Train':
                setIconName('train');
                break;
                case 'Ferry':
                    setIconName('ferry');
                break;
                default:
                    setIconName('truck');
                    break;
        }
    }, []);
    return (
        <View style={styles.Container}>
            <View style={styles.ContainerImage}>
                <ImageBackground source={image} style={styles.Image}>
                    <Text style={styles.Id}>ID: {Containers[0].id}</Text>
                    <View style={styles.ViewFrom}>
                        <Text style={styles.FromTo}>From</Text>
                        <Text style={styles.Country}>{Containers[0].origin}</Text>
                        <Text style={styles.FromTo}>At {Containers[0].dateLeave}</Text>
                    </View>
                    <View style={styles.ViewTo}>
                        <Text  style={styles.FromTo}>To</Text>
                        <Text style={styles.Country}>{Containers[0].destination}</Text>
                        <Text style={styles.FromTo}>At {Containers[0].dateArrive}</Text>
                    </View>
                </ImageBackground>
            </View>
                <View style={styles.ContainerDetails}>
                    <ScrollView>
                        <DetailComponent dataType="Category" description={Containers[0].category} iconName="shape" />
                        <DetailComponent dataType="Caution" description={Containers[0].caution} iconName="alert" />
                        <DetailComponent dataType="Trademark" description={Containers[0].tradeMark} iconName="office-building" />
                        <DetailComponent dataType="Transport" description={Containers[0].transport} iconName={iconName}/>
                        <DetailComponent dataType="Size" description={Containers[0].size} iconName="arrow-split-horizontal" />
                        <DetailComponent dataType="Weight" description={Containers[0].weight} iconName="weight-kilogram" />
                    </ScrollView>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#E0E0E0',
        flex: 1,
    },
    ContainerImage: {
        borderWidth: 1,
        width: '100%',
        height: 280,
    },
    Image: {
        width: '100%',
        height: 280,
    },
    Id:{
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15,
    },
    ViewFrom: {
        marginTop: 28,
        marginLeft: 70,
    },
    ViewTo: {
        marginTop: 35,
        marginLeft: 70,
    },
    FromTo:{
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic',
    },
    Country:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    ContainerDetails: {
        paddingTop: 10,
        alignItems: 'center',
        height: '48%',
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: 'white',
    },
});

export default Component;
