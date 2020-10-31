import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Favorites, Restaurants } from './pages'

const Tab = createBottomTabNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="RestaurantsPage">
                <Tab.Screen name="FavoritesPage" component={Favorites} />
                <Tab.Screen name="RestaurantsPage" component={Restaurants} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;