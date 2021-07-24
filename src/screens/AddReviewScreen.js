import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddReviewExperienceComponent from '../components/AddReviewExperienceComponent';

export default class AddReviewScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <AddReviewExperienceComponent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})