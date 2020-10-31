import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';

const Restaurants = (props) => {
    const [list, setList] = useState([]);

    // const fetchData = () => {
    //     axios.post(
    //         'https://worldwide-restaurants.p.rapidapi.com/search',
    //         {
    //             "limit": "30",
    //             "language": "en_US",
    //             "location_id": "297704",
    //             "currency": "USD"
    //         },
    //         {
    //             headers: {
    //                 "content-type": "application/json",
    //                 "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
    //                 "x-rapidapi-key": "0166bfd020msh2af84d5a89becb9p16e63djsn8256b0c41551",
    //             }
    //         }
    //     )
    //         .then(response => setList(response.data.results.data))
    //         .catch(error => console.log(error))
    // }

    // useEffect(() => fetchData(), []);

    const renderList = ({item}) => null

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Restaurants</Text>
                <FlatList
                    data={list}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    )
}

export { Restaurants }
