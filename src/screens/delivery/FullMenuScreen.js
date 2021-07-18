import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class FullMenuScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>FullMenuScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})