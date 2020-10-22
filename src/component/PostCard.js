import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// "id": 0,
// "userName": "tesla_nikola",
// "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
// "description": "Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.",
// "isLiked": false

const PostCard = (props) => {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: props.post.img }}
            />
            <Text>{props.post.userName}</Text>
        </TouchableOpacity>
    )
}

export default PostCard;