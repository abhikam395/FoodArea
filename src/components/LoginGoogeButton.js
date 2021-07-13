import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default function LoginGoogleButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <SocialIcon type="google" style={styles.icon}/>
            <Text style={styles.label}>Google</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 53,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: 5
    },
    label: {
        fontSize: 16
    },
    icon: {
        height: 30,
        width: 30
    }
})