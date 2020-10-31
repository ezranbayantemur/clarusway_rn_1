import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Favorites, Restaurants } from './pages'

const Tab = createBottomTabNavigator();

function Router() {
    return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="RestaurantsPage"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ _, color, size }) => {
                            let iconName;

                            if (route.name === 'FavoritesPage') {
                                iconName = "gratipay"
                            } else if (route.name === 'RestaurantsPage') {
                                iconName = "cutlery"
                            }

                            // You can return any component that you like here!
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })
                    }
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen
                        name="FavoritesPage"
                        component={Favorites}
                        options={{
                            title: "Favori Mekanlar"
                        }}
                    />
                    <Tab.Screen
                        name="RestaurantsPage"
                        component={Restaurants}
                        options={{
                            title: "Restoranlar"
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>

    );
}

export default Router;