import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FullMenuScreen from './../screens/delivery/FullMenuScreen';
import HealthyScreen from './../screens/delivery/HealthyScreen';
import { RED } from '../utils/colors';

const Tab = createMaterialTopTabNavigator();

export default function(){
    return (
        <Tab.Navigator
            style={{backgroundColor: '#f5f5f5'}}
            tabBarOptions={{
                style: {
                    width: '50%',
                    elevation: 0,
                    backgroundColor: '#f5f5f5',
                },
                labelStyle: {
                    fontSize: 13,
                    letterSpacing: .7,
                    textTransform: 'none',
                    fontWeight: 'bold'
                },
                indicatorStyle: {
                    backgroundColor: RED,
                },
            }}>
            <Tab.Screen 
                name="FullMenu" 
                component={FullMenuScreen} 
                options={{title: 'Full Menu'}}/>
            <Tab.Screen 
                name="Healthy" 
                component={HealthyScreen} />
        </Tab.Navigator>
    )
}