import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

// {
//     id: 0,
//     author: 'Omkar Godbole',
//     title: 'Bulls Exit BitMEX Bitcoin Futures Market',
//     description:
//         'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
//     imageUrl:
//         'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
// },

const NewsCard = ({ news }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: news.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
        </View>
    );
}

export { NewsCard };

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
    },
    image: {
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 5,
    }

})