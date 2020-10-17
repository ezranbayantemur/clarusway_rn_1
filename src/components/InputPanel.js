import React from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet, TextPropTypes } from 'react-native';

const InputPanel = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Arama.."
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{
                    textAlign: 'center'
                }}>Seç</Text>
            </TouchableOpacity>

        </View>
    )
}

export default InputPanel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cfd8dc',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    inputContainer: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#b2dfdb',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
})
