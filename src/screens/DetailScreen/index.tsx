/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import DetailComponent from '../../components/DetailComponent';
import { Containers } from '../../data/DataContainers';
import { colors } from '../../themes/baseTheme';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParams } from '../../navigators/MainNavigator';

interface Props extends NativeStackScreenProps<MainParams, 'ContainersScreen'>{}

const image = require('../../assets/images/detailImage.png');
const Component = (props: Props) => {
    const {
        route: {params: container},
    } = props;
    const index = parseInt(container, 10) - 1;
    const [iconName, setIconName] = useState('');
    useEffect(() => {
        switch (Containers[index].transport){
            case 'Train':
                setIconName('train');
                break;
                case 'Ship':
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
                    <Text style={styles.Id}>ID: {Containers[index].id}</Text>
                    <View style={styles.ViewFrom}>
                        <Text style={styles.FromTo}>From</Text>
                        <Text style={styles.Country}>{Containers[index].origin}</Text>
                        <Text style={styles.FromTo}>At {Containers[index].dateLeave}</Text>
                    </View>
                    <View style={styles.ViewTo}>
                        <Text  style={styles.FromTo}>To</Text>
                        <Text style={styles.Country}>{Containers[index].destination}</Text>
                        <Text style={styles.FromTo}>At {Containers[index].dateArrive}</Text>
                    </View>
                </ImageBackground>
            </View>
                <View style={styles.ContainerDetails}>
                    <ScrollView>
                        <DetailComponent dataType="Category" description={Containers[index].category} iconName="shape" />
                        <DetailComponent dataType="Temperature" description={Containers[index].temperature} iconName="thermometer" />
                        <DetailComponent dataType="Humidity" description={Containers[index].humidity} iconName="water" />
                        <DetailComponent dataType="Caution" description={Containers[index].caution} iconName="alert" />
                        <DetailComponent dataType="Trademark" description={Containers[index].tradeMark} iconName="office-building" />
                        <DetailComponent dataType="Transport" description={Containers[index].transport} iconName={iconName}/>
                        <DetailComponent dataType="Size" description={Containers[index].size} iconName="arrow-split-horizontal" />
                        <DetailComponent dataType="Weight" description={Containers[index].weight} iconName="weight-kilogram" />

                    </ScrollView>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container:{
        backgroundColor: colors.grayE0E0,
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
        color: colors.white,
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
        fontSize: 15,
        color: colors.white,
        fontStyle: 'italic',
    },
    Country:{
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
    },
    ContainerDetails: {
        paddingTop: 10,
        alignItems: 'center',
        height: '52%',
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: colors.white,
    },
});

export default Component;
