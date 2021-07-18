import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeliveryScreen from '../screens/restaurant/DeliveryScreen';
import DiningScreen from '../screens/restaurant/DiningScreen';
import ReviewsScreen from '../screens/restaurant/ReviewsScreen';

const Tab = createMaterialTopTabNavigator();

export default function(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#eceff1', 
                    elevation: 0, 
                    borderRadius: 10
                },
                indicatorStyle: {
                    height: '100%',
                    borderRadius: 10,
                    backgroundColor: 'black',
                },
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                labelStyle: {
                    letterSpacing: 1.5
                },
            }}>
            <Tab.Screen name="Delivery" component={DeliveryScreen} />
            <Tab.Screen name="Dining" component={DiningScreen} />
            <Tab.Screen name="Reviews" component={ReviewsScreen} />
        </Tab.Navigator>
    )
}