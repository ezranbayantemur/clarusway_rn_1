import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Component_B = (props) => {
    const ourCounter = useSelector(onur => onur.counter)

    return (
        <View style={{ backgroundColor: '#bdbdbd', flex: 1 }}>
            <Text>Component_B</Text>
            <Text style={{ fontSize: 50 }}>Counter: {ourCounter}</Text>

        </View>
    );
};

export default Component_B;