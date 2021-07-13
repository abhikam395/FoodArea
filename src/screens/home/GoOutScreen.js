import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class GoOutScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>GoOut Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})