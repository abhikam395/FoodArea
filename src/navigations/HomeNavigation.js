import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GoOutScreen from './../screens/home/GoOutScreen';
import OrderScreen from './../screens/home/OrderScreen';
import ProScreen from './../screens/home/ProScreen';
import DonateScreen from './../screens/home/DonateScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeBottomTab = createBottomTabNavigator();

export default function HomeNavigation(){
    return (
        <HomeBottomTab.Navigator
            tabBarOptions={({f}) => ({

            })}
            screenOptions={({route}) => ({
                tabBarBadgeStyle: {backgroundColor: 'red'},
                tabBarIcon: ({focused}) => {
                    if(route.name === 'Order')
                        return <MaterialCommunityIcons name="shopping-outline"/>
                    else if (route.name === 'GoOut')
                        return <MaterialCommunityIcons name="foot-print"/>
                    else if (route.name === 'Pro')
                        return <FontAwesome name="money"/>
                    else if (route.name ===  'Donate')
                        return <FontAwesome5 name="donate"/>
                }
            })}>
            <HomeBottomTab.Screen name="Order" component={OrderScreen}/>
            <HomeBottomTab.Screen name="GoOut" component={GoOutScreen}/>
            <HomeBottomTab.Screen name="Pro" component={ProScreen}/>
            <HomeBottomTab.Screen name="Donate" component={DonateScreen}/>
        </HomeBottomTab.Navigator>
    )
}