import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeNavigation';
import LoginScreen from '../screens/LoginScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

const MainStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
};

export default function MainNavigation(){
    return (
        <NavigationContainer theme={MyTheme}>
            <MainStack.Navigator
                initialRouteName="Login"
                screenOptions={{headerShown: false}}>
                <MainStack.Screen 
                    name="Home" 
                    component={HomeNavigation}/>
                <MainStack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <MainStack.Screen 
                    name="Location"
                    component={LocationScreen}
                />
                <MainStack.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
                <MainStack.Screen
                    name="Restaurant"
                    component={RestaurantScreen}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}