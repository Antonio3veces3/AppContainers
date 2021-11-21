/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props{
    dataType: string,
    description: string,
}

const Component = (props: Props) => {
    const {dataType, description} = props;
    return (
        <View style={styles.DetailCard}>
        <Text>Icon</Text>
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

