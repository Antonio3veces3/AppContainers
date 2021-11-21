/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import {colors} from '../../themes/baseTheme';

interface Props {
    photo: string,
    name: string,
    ocuppation: string,
    tel: string,
}

const Component = (props: Props) => {
    const {photo, name, ocuppation, tel} = props;

    return (
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                <View>
                    <Text style={styles.TextName}>{name}</Text>
                    <Text style={styles.TextOccupation}>{ocuppation}</Text>
                    <Text style={styles.TextTel}>{tel}</Text>
                </View>
                <View style={styles.ContainerImage}>
                    <Image style={styles.Image} source={{uri: photo}} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.blue2951,
    },
    ContainerCard: {
        backgroundColor: 'white',
        margin: 18,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        flexDirection: 'column',
    },
    TextName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.blue1c36,
        borderBottomColor: colors.blue1c36,
        borderBottomWidth: 1,
        width: '100%',
        padding: 10,
    },
    TextOccupation: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        color: colors.blue1640,
        marginTop: 10,
    },
    TextTel: {
        fontSize: 19,
        fontStyle: 'italic',
        padding: 10,
        color: colors.blue026e,
    },
    ContainerImage: {
        borderColor: 'black',
        borderWidth: 1,
        width: 110,
        height: 110,
        alignSelf: 'flex-end',
        marginTop: -98,
    },
    Image: {
        width: 110,
        height: 110,
    },
});

export default Component;
