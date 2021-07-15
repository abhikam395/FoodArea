import React, {Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { RED } from '../utils/colors';

export default class HomeHeaderComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Fontisto 
                    name="map-marker-alt" 
                    color={RED} 
                    size={20} 
                />
                <TouchableOpacity style={styles.addressContainer}>
                    <Text style={styles.address}>Adarsh Vihar, Adhoiwala</Text>
                    <View style={styles.line}/>                
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile}>
                    <Text style={styles.firstLetter}>S</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    addressContainer: {
        marginLeft: 10
    },
    address: {
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: .4
    },
    line: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'grey',
        marginTop: 3
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#1a237e',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    firstLetter: {
        color: 'white',
    }
})