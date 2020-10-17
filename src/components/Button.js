import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            style={
                [
                    myStyles.buttonContainer,
                    {
                        backgroundColor: props.color === undefined ? "#a5d6a7" : props.color
                    }
                ]}
            onPress={props.sayingHello}
        >
            <Text style={myStyles.textStyle}>{props.banner}</Text>
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
    },
    textStyle: {
        fontSize: 20
    }
})