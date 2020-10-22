import * as React from 'react';
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const First = () => {
    return (
        <SafeAreaView>
            <Text>First</Text>
        </SafeAreaView>
    )
}
const Second = () => {
    return (
        <SafeAreaView>
            <Text>Second</Text>
        </SafeAreaView>
    )
}

function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="FirstPage" component={First} />
                <Tab.Screen name="SecondPage" component={Second} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;