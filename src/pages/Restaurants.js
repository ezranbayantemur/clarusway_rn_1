import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';

import { RestaurantItem } from '../components'

const Restaurants = (props) => {
    const [list, setList] = useState([]);

    const fetchData = () => {
        axios.post(
            'https://worldwide-restaurants.p.rapidapi.com/search',
            {
                "limit": "30",
                "language": "en_US",
                "location_id": "297704",
                "currency": "USD"
            },
            {
                headers: {
                    "content-type": "application/json",
                    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                    "x-rapidapi-key": "e8b94aa0famsh20169f3117020acp1ba769jsn464a1d7d41ca",
                }
            }
        )
            .then(response => setList(response.data.results.data))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchData(), []);

    const renderList = ({ item }) => <RestaurantItem item={item} />

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Restaurants</Text>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    )
}

export { Restaurants }
