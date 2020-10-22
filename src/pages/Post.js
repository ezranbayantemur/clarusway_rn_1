import React from 'react';
import {SafeAreaView, View, Text } from 'react-native';

const Post = (props) => {
    console.log("POST RENDERING...");
    return(
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Post</Text>
            </View>
        </SafeAreaView>
    )
}

export { Post }