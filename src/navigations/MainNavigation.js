import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './HomeNavigation';
import LoginScreen from '../screens/LoginScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import AddReviewScreen from '../screens/AddReviewScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

const MainStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
};

export default function MainNavigation(){

    function goBack(navigation){
        navigation.goBack();
    }

    return (
        <NavigationContainer theme={MyTheme}>
            <MainStack.Navigator
                initialRouteName="AddReview"
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
                <MainStack.Screen
                    name="AddReview"
                    component={AddReviewScreen}
                    options={({navigation}) => (
                        {
                            headerShown: true,
                            headerTitleStyle: {
                                fontSize: 18
                            },
                            headerTitleAlign: 'center',
                            headerLeft: () => (
                                <TouchableOpacity
                                    onPress={() => goBack(navigation)}>
                                    <MaterialIcons name="clear" size={22}/>
                                </TouchableOpacity>
                            ),
                            headerLeftContainerStyle: {
                                paddingLeft: 10
                            }
                        }
                    )}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}