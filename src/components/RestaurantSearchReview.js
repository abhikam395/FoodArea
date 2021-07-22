import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RED } from '../utils/colors';

export default class RestaurantSearchReview extends Component{
    render(){
        return (
            <View style={styles.container}>
                <AntDesign 
                    name="search1" 
                    size={20} 
                    color={RED}/>
                <TextInput 
                    placeholder="Search in reviews" 
                    style={styles.input}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        zIndex: 2,
        marginHorizontal: 1,
        marginVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 15
    },
    input: {
        fontSize: 15,
        marginLeft: 5,
        flex: 1
    }
})