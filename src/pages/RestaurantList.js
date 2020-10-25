import axios from 'axios';
import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const RestaurantList = (props) => {
    const { selectedCity } = props.route.params

    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    city: selectedCity
                }
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    return (
        <SafeAreaView>
            <View>
                <Text>{selectedCity}</Text>
            </View>
        </SafeAreaView>
    )
}

export { RestaurantList }