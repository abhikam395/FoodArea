import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LIGHTGREEN } from '../utils/colors';

const list = [
    {id: 1, name: 'Delicious'},
    {id: 2, name: 'Fresh Food'},
    {id: 3, name: 'Good Quality'},
    {id: 4, name: 'Delicious'},
    {id: 5, name: 'Fresh Food'},
    {id: 6, name: 'Good Quality'},
    {id: 7, name: 'Delicious'},
    {id: 8, name: 'Fresh Food'},
    {id: 9, name: 'Good Quality'}
]

export default class RestaurantReviewHighlights extends Component{

    constructor(){
        super();
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}){
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <FlatList
                data={list}
                horizontal={true}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        height: 30,
        paddingHorizontal: 10,
        borderWidth: .2,
        borderRadius: 15,
        borderColor: LIGHTGREEN,
        marginRight: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 200, 0, .03)'
    },
    label: {
        fontSize: 12
    }
})