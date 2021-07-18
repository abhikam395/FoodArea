import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ReviewsScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>ReviewsScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})