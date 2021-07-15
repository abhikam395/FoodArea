import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RED } from '../utils/colors';

export default function LocationButton({navigation}){

    function navigateToHomeScreen(){
        navigation.replace('Home')
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigateToHomeScreen()}>
            <Text style={styles.label}>Use current location</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: RED,
        height: 53,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: 'white',
        fontSize: 18
    }
})