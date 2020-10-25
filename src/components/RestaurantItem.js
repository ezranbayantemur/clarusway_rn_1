import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const RestaurantItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: props.restaurant.image_url }}
            />
            <Text style={styles.name}>{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export { RestaurantItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height / 3
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})