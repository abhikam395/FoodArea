import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import { LIGHTGREEN, RED } from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const list = [
    {id: 1, name: 'Filters'},
    {id: 2, name: 'All Reviews'},
    {id: 3, name: 'Latest'},
    {id: 4, name: 'Detaied Review'},
]

export default class RestaurantSearchTags extends Component{

    constructor(){
        super();
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}){
        if(item.id == 1){
            return (
                <TouchableOpacity style={styles.item}>
                    <View style={styles.countTag}>
                        <Text style={styles.countTagLabel}>3</Text>
                    </View>
                    <Text style={styles.label}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        else if(item.id == 2){
            return (
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.label}>{item.name}</Text>
                    <MaterialIcons 
                        name="arrow-drop-down" 
                        size={20}/>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.label}>{item.name}</Text>
                <TouchableOpacity>
                    <MaterialIcons 
                        name="clear" 
                        size={14} 
                        style={styles.clearIcon}/>
                </TouchableOpacity>
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
        height: 33,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: RED,
        marginRight: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(200, 0, 0, .03)',
        flexDirection: 'row',
    },
    label: {
        fontSize: 12
    },
    clearIcon: {
        marginLeft: 5
    },
    countTag: {
        backgroundColor: RED,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    countTagLabel: {
        fontSize: 10,
        color: 'white'
    }
})