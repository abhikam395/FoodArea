import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function DeliveryMenuFloatingComponent(){
    return (
        <TouchableOpacity style={styles.container}>
            <MaterialIcons 
                name="menu" 
                color="white"
                size={16}/>
            <Text style={styles.label}>Menu</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'black',
        position: 'absolute',
        paddingHorizontal:20,
        elevation: 10,
        zIndex: 10,
        bottom: 40,
        right: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 16,
        color: 'white',
        marginLeft: 5
    }
})