import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RED } from '../utils/colors';

export default function LocationSetLocationButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>Set your location manually</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 53,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    label: {
        color: RED,
        fontSize: 18
    }
})