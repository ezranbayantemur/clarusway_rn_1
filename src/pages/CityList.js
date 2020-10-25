import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { CityItem } from '../components'

const CityList = (props) => {
    const [cityList, setCityList] = useState([]);

    // ASYNC-AWAIT 
    const fetchCityData = async () => {
        const { data } = await axios.get("https://opentable.herokuapp.com/api/cities");
        setCityList(data.cities);
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({ item }) => <CityItem cityName={item} />

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                />
            </View>
        </SafeAreaView>
    )
}

export { CityList };