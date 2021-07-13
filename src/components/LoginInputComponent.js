import React from 'react';
import Flag from 'react-native-flags';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function LoginInputComponent(){
    return (
        <View style={styles.container}>
            <Flag code="IN" size={64} type="flat" style={styles.icon}/>
            <Text style={styles.phoneCode}>+91</Text>
            <MaterialIcons 
                size={20}
                name="keyboard-arrow-down" 
                style={styles.dropDownIcon}/>
            <TextInput 
                placeholder="Phone Number" 
                style={styles.input}
                placeholderTextColor="#bdbdbd"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 53,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        marginHorizontal: 5,
        flex: 1,
    },
    phoneCode: {
        fontSize: 15
    },
    icon: {
        width: 50,
        height: 30,
        borderRadius: 10,
        resizeMode: 'contain'
    },
})