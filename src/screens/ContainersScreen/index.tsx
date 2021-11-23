/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import ContainerComponent from '../../components/ContainerComponent';
import { Containers } from '../../data/DataContainers';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


interface Props extends NativeStackScreenProps <any, any>{}


const Component = (props: Props) => {

    const {navigation} = props;

    const onSelectContainer = (id: typeof Containers) => {
        navigation.navigate('DetailScreen',id);
    };

    const getContainers = Containers?.map((container,index) => {
        return (
            <ContainerComponent
                key={`Container-${index}`}
                id={container.id}
                origin={container.origin}
                destination={container.destination}
                transport={container.transport}
                category={container.category}
                onClick={onSelectContainer}
            />
        );
    });
    return (
        <ScrollView>
            {getContainers}
        </ScrollView>
    );
};
export default Component;
