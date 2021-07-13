import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { SocialIcon } from 'react-native-elements'

export default function LoginFBButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <SocialIcon type="facebook" style={styles.icon}/>
            <Text style={styles.label}>Facebook</Text>
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
        marginRight: 5
    },
    label: {
        fontSize: 16
    },
    icon: {
        width: 30,
        height: 30
    }
})