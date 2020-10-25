import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const RestaurantDetail = (props) => {
    const { selectedRestaurant } = props.route.params;

    console.log(selectedRestaurant);
    // address: "187 Evergreen lane"
    // area: "Pittsburgh"
    // city: "Acme"
    // country: "US"
    // id: 149800
    // image_url: "https://www.opentable.com/img/restimages/149800.jpg"
    // lat: 40.16498
    // lng: -79.418203
    // mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=149800"
    // name: "Tree Tops Restaurant"
    // phone: "8778337829x3"
    // postal_code: "15610"
    // price: 3
    // reserve_url: "http://www.opentable.com/single.aspx?rid=149800"
    // state: "PA"

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>

                <Image
                    style={styles.image}
                    source={{ uri: selectedRestaurant.image_url }}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { RestaurantDetail }

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    name: { fontWeight: '300', fontSize: 30 },
    image: { height: Dimensions.get('window').height / 3 },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: { color: 'white', fontWeight: 'bold' }
})