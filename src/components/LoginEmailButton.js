import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function LoginEmailButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <Entypo 
                name="mail" 
                size={34} 
                style={styles.icon} 
            />
            <Text style={styles.label}>Continue with Email</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 53,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    label: {
        fontSize: 16
    },
    icon: {
        position: 'absolute',
        left: 15,
        width: 30
    }
})