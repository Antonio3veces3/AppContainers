/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import {colors} from '../../themes/baseTheme';

interface Props {
    photo: string,
    name: string,
    ocuppation: string,
    tel: string,
}

const Component = (props: Props) => {
    const {photo, name, ocuppation, tel} = props;
    const [iconName, setIconName] = useState('');

    useEffect(() => {
        switch (ocuppation){
            case 'Inspector':
                setIconName('account-search');
                break;

            case 'Manager':
                setIconName('account-tie');
                break;

            case 'First oficial':
                setIconName('account-star');
                break;

            case 'Shipping agent':
                setIconName('account-hard-hat');
                break;
        }
    }, []);

    return (
        <View style={styles.Container}>
            <View style={styles.ContainerCard}>
                <View>
                    <Text style={styles.TextName}>{name}</Text>
                    <View style={styles.ContainerIcon}>
                        <Icon
                            style={styles.Icon}
                            name={iconName}
                            type={'material-community'}
                            color="black"
                            size={35} />
                    </View>
                    <Text style={styles.TextOccupation}>Position: {ocuppation}</Text>
                    <Text style={styles.TextTel}>Phone: {tel}</Text>
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
        marginVertical: 15,
        marginHorizontal: 15,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        flexDirection: 'column',
    },
    TextName: {
        backgroundColor: colors.bluec4e4,
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.blue1c36,
        borderColor: colors.blue026e,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        letterSpacing: 4,
        padding: 10,
    },
    TextOccupation: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: colors.blue1640,
        marginTop: 5,
        width: '65%',
    },
    TextTel: {
        fontSize: 15,
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
        marginTop: '-32%',
        marginRight: 10,
        marginBottom: 10,
    },
    Image: {
        width: 110,
        height: 110,
    },
    Icon: {
        width: 40,
        height: 40,
    },
    ContainerIcon: {
        width: 40,
        height: 40,
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
    },
});

export default Component;
