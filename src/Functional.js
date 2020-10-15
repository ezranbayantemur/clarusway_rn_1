import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, Alert, Dimensions, TextInput, StyleSheet } from 'react-native';

const App = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ margin: 20, fontSize: 150 }}>🌍</Text>

                <View style={styles.input}>
                    <TextInput
                        placeholder='E-posta adresinizi giriniz..'
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        placeholder='Şifrenizi giriniz..'
                    />
                </View>

                <Button title="Giriş Yap" />

            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: Dimensions.get('window').width * 0.85
    }
})