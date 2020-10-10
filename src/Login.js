import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import {Input, Button} from './components'

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('./assets/cart.png')}
                    style={styles.logoStyle}
                />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.40
    }
})