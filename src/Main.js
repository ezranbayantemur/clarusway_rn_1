import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles'

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <View style={styles.banner}>
                    <Text style={styles.todoText}>TODO</Text>
                    <Text style={styles.todoCount}>10</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Main;