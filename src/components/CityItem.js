import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CityItem = (props) => {
    return (
        <TouchableOpacity>
            <Text>{props.cityName}</Text>
        </TouchableOpacity>
    )
}

export { CityItem };