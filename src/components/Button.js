import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={myStyles.buttonContainer}>
            <Text>Press me!</Text>
        </TouchableOpacity>
    )
}

export default Button;

const myStyles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#a5d6a7',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    }
})