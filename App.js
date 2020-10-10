import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = () => {

  const pressFunction = () => {
    // Spread Operator
    const user = {
      name: "Ezran",
      age: 28,
      isAdmin: false
    }

    const member = {
      name: user.name,
      age: user.age,
      isAdmin: user.isAdmin,
      password: "12345",
      type: null
    }

    const myArr = [1, 2, 3, 4];
    const secArr = [ "İzmir", "Ankara", ...myArr  ]

    const newArr = [...myArr]

    // console.log(secArr)
    // console.log(newArr)

    // Destruction Operator
    const myObj = {
      url: "www.google.com",
      data: [1, 2, 3],
      config: "EMPTY"
    }

    const {config, url} = myObj

    console.log(config);
    console.log(url);

    //
    // (event) => {
      // event.target
      //
      //
      //
    //   event.domain
    // }

    ({target, domain}) => {
      target
      //
      //
      //
      domain
    }


  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello React Native </Text>
        <Button title='Log' onPress={pressFunction} />
      </View>
    </SafeAreaView>
  );
};

export default App;

{/* 
  <Button title='Log' onPress={pressFunction} />
  =>
  <Button title='Log' onPress={() => {
      console.log("Merhaba!")
    }} />


  <Button title='Log' onPress={pressFunction()} />
  =>
  <Button title='Log' onPress={console.log("Merhaba!")} />
*/}
