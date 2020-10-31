import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantItem = ({ item, onAddFavorite }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onAddFavorite}>
            <Icon name={"fire"} size={20} color={"red"} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export { RestaurantItem }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 10,
        fontWeight: '200'
    }
})
