import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { CityList, RestaurantDetail, RestaurantList } from './pages'

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Cities"
                    component={CityList}
                />
                <Stack.Screen
                    name="Restaurants"
                    component={RestaurantList}

                />
                <Stack.Screen
                    name="Details"
                    component={RestaurantDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;