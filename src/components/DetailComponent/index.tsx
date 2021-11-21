/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
interface Props{
    dataType: string,
    description: string,
    iconName: string,
}

const Component = (props: Props) => {
    const {dataType, description, iconName} = props;
    return (
        <View style={styles.DetailCard}>
        <Icon  type="material-community"  name={iconName} color="gray" size={15}/>
        <View style= {styles.ViewInfo}>
        <Text style={styles.NameDetail}>{dataType}</Text>
        <Text style= {styles.Description}>{description}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    DetailCard: {
        marginTop: 1,
        padding: 3,
        width: 350,
        height: 70,
        paddingLeft: 30,
        flexDirection: 'row',
    },
    ViewInfo:{
        flexDirection: 'column',
    },
    NameDetail:{
        fontSize: 16,
    },
    Description: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default Component;

