/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';

const App = () => {
  function sayHello() {
    const platform = Platform.OS;
    const version = Platform.Version;

    if (platform === 'ios')
      return (
        <Text
          style={{
            fontSize: 30,
          }}>
          Hello to iPhone: {version}
        </Text>
      );
    else
      return (
        <Text
          style={{
            fontSize: 30,
          }}>
          Hello to Android! {version}
        </Text>
      );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder="Aramak istediğiniz ürünü giriniz.."
          />
        </View>
        {/* <Text style={{fontSize: 40}}>Cihaz: {platform} </Text>  */}
        {sayHello()}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});
