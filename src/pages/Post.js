import React from 'react';
import { SafeAreaView, View, Text, Image, Dimensions } from 'react-native';

const Post = (props) => {

    const postData = props.route.params.selectedPost

    return (
        <SafeAreaView>
            <View>
                <Text style={{ margin: 10, fontSize: 20, fontWeight: 'bold' }}>{postData.userName}</Text>
                <Image
                    source={{ uri: postData.img }}
                    style={{
                        height: Dimensions.get('window').height / 2
                    }}
                />
                <Text style={{ margin: 10 }}>{postData.description}</Text>
            </View>
        </SafeAreaView>
    )
}

export { Post }