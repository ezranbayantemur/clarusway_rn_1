import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { todo_input } from '../styles'

const TodoInput = (props) => {
    return (
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput />
            </View>

            <Text>Todo Input</Text>
        </View>
    )
}

export default TodoInput;