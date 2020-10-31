import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RestaurantItem = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { RestaurantItem }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    text: {
        fontWeight: '200'
    }
})
