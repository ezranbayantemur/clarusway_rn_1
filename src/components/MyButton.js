import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0277bd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
