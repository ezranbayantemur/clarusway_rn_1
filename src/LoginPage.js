import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';

const LoginPage = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Login</Text>

                <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
                    <TextInput
                        placeholder="Type your mail.."
                    />
                </View>

                <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
                    <TextInput
                        placeholder="Type your password"
                    />
                </View>

                <Button
                    title="Sign Up"
                />
                <Button
                    title="Sign In"
                />

            </View>
        </SafeAreaView>
    );
}

export default LoginPage;   