import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function LoginSendOptButton(){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>Send OTP</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 53,
        backgroundColor: 'black',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: 'white',
        fontSize: 17,
    }
})