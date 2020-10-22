import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
import PostCard from '../component/PostCard';

const post_data = [
    {
        "id": 0,
        "userName": "tesla_nikola",
        "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
        "description": "Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.",
        "isLiked": false
    },
    {
        "id": 1,
        "userName": "albertEinstein",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81XrGrp-E9L._AC_SL1500_.jpg",
        "description": "Do nulla ex minim ut magna qui do aute Lorem pariatur duis pariatur pariatur ipsum. Et aliqua dolore non voluptate duis aliqua qui. Laboris voluptate est minim in anim cillum dolore.",
        "isLiked": false
    },
    {
        "id": 2,
        "userName": "edison",
        "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/wpap-of-thomas-alva-edison-andiko-arya-nugraha.jpg",
        "description": "Anim veniam esse proident amet nostrud id ut ullamco sint non pariatur Lorem. Veniam veniam qui ex exercitation irure pariatur cillum culpa ex fugiat ipsum ipsum. Qui sunt sit ut et nisi cupidatat amet proident magna.",
        "isLiked": false
    },
    {
        "id": 3,
        "userName": "marie_curie",
        "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-marie-curie-artwork-taoteching-art.jpg",
        "description": "Ullamco culpa ipsum pariatur eu ullamco tempor labore nostrud eiusmod. Labore ut adipisicing deserunt proident excepteur Lorem incididunt eu. Quis anim ullamco ullamco est commodo.",
        "isLiked": false
    },
    {
        "id": 4,
        "userName": "NEWTON",
        "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfc73392-beb8-4683-848d-8df54d8d99a0/d9qoe6t-abf01baf-d31c-4e1f-8b8a-df0a7328b2df.jpg/v1/fill/w_1024,h_1449,q_75,strp/sir_isaac_newton_on_wpap_by_andikoarya_d9qoe6t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGZjNzMzOTItYmViOC00NjgzLTg0OGQtOGRmNTRkOGQ5OWEwXC9kOXFvZTZ0LWFiZjAxYmFmLWQzMWMtNGUxZi04YjhhLWRmMGE3MzI4YjJkZi5qcGciLCJoZWlnaHQiOiI8PTE0NDkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9kZmM3MzM5Mi1iZWI4LTQ2ODMtODQ4ZC04ZGY1NGQ4ZDk5YTBcL2FuZGlrb2FyeWEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.m0AFm8EI-uE2zGzrn-V7OzSmO6L5D7QvkYRU9iTncKg",
        "description": "Ipsum commodo Lorem adipisicing duis dolor Lorem tempor enim laboris labore ullamco velit quis. Fugiat sit exercitation labore nulla adipisicing eiusmod Lorem do cillum mollit. Tempor elit duis ex tempor sint.",
        "isLiked": false
    },
]

const Timeline = (props) => {

    const renderPostData = ({ item }) => {
        return (
            <PostCard
                post={item}
                onSelect={() => props.navigation.navigate('PostPage', { selectedPost: item })}
            />
        )
    }

    return (
        <SafeAreaView>
            <View>

                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={post_data}
                    renderItem={renderPostData}
                    ItemSeparatorComponent={() => <View style={{ borderWidth: 1, marginVertical: 5, borderColor: '#bdbdbd' }} />}
                />

            </View>
        </SafeAreaView>
    )
}

export { Timeline }
