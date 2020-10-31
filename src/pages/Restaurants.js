import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux'

import { RestaurantItem } from '../components'

const Restaurants = (props) => {
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    const fetchData = () => {
        axios.get(
            'https://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    "state": "IL"
                }
            }
        )
            .then(response => setList(response.data.restaurants))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchData(), []);

    const renderList = ({ item }) => {
        return (
            <RestaurantItem
                item={item}
                onAddFavorite={() => dispatch({
                    type: "ADD_TO_FAVORITE",
                    payload: { selectedRestaurant: item }
                })}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Restoranlar</Text>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={renderList}
                    ItemSeparatorComponent={() => <View style={{ borderWidth: 0.5, borderColor: '#bdbdbd' }} />}
                />
            </View>
        </SafeAreaView>
    )
}

export { Restaurants }
