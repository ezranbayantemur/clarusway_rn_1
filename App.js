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
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            placeholder="Aramak istediğiniz ürünü giriniz.."
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textStyle}>Ara</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: 'blue', 
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  }
});
