import * as React from 'react';
import { Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Main, Post } from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="PostPage" >
                <Tab.Screen name="MainPage" component={Main} />
                <Tab.Screen name="PostPage" component={Post} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;