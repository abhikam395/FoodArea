import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeNavigation';
import LoginScreen from '../screens/LoginScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainStack = createStackNavigator();

export default function MainNavigation(){
    return (
        <NavigationContainer>
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
            </MainStack.Navigator>
        </NavigationContainer>
    )
}