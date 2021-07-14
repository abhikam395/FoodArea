import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import HomeHeaderComponent from '../../components/HomeHeaderComponent';
import SearchbarComponent from '../../components/SearchbarComponent';

export default class OrderScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"/>
                <HomeHeaderComponent />
                <SearchbarComponent />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})