import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';

const LoginPage = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signIn = () => {

    }

    const signUp = () => {

    }

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Login</Text>

                <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
                    <TextInput
                        placeholder="Type your mail.."
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
                    <TextInput
                        placeholder="Type your password"
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <Button
                    title="Sign Up"
                    onPress={signUp}
                />
                <Button
                    title="Sign In"
                    onPress={signIn}
                />

            </View>
        </SafeAreaView>
    );
}

export default LoginPage;   