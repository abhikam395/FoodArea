import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeNavigation';
import LoginScreen from '../screens/LoginScreen';
import LocationScreen from '../screens/home/LocationScreen';

const MainStack = createStackNavigator();

export default function MainNavigation(){
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Location"
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
            </MainStack.Navigator>
        </NavigationContainer>
    )
}