import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DonateScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Donate Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})