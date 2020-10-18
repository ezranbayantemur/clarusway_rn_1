import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { todo_card } from '../styles'

const TodoCard = (props) => {
    return (
        <View style={todo_card.container}>
            <Text style={todo_card.text}>{props.data.todo}</Text>
        </View>
    )
}

export { TodoCard }