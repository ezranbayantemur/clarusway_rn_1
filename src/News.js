import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native';

const myArray = Array.from(Array(15000).keys());

const News = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView style={{ flex: 1 }}>
                {
                    myArray.map(u => <Text style={{ fontSize: 30 }}>{u}</Text>)
                }
            </ScrollView> */}

            <FlatList
                data={myArray}
                renderItem={(data) => <Text style={{ fontSize: 30 }}>{data.item}</Text>}
            />


        </SafeAreaView>
    )
}

export default News