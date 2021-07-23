import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantReviewItem from './RestaurantReviewItem';

const reviews = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
]

export default class RestaurantReviewList extends Component{
    render(){
        return (
            <FlatList 
                data={reviews}
                keyExtractor={item => item.id.toString()}
                renderItem={() => <RestaurantReviewItem />}
                ItemSeparatorComponent={() => <View style={styles.line}/>}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    line: {
        height: 5,
        backgroundColor: '#eeeeee',
        width: '100%',
    }
})