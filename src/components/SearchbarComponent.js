import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RED } from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SearchbarComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <AntDesign 
                    name="search1" 
                    size={22} 
                    color={RED} 
                    style={styles.searchIcon}
                />
                <Text style={styles.inputLabel}>Restaurant name, cuisine, or a...</Text>
                <View style={styles.filterContainer}>
                    <TouchableOpacity>
                        <MaterialIcons name="filter-list" size={20} style={styles.filterIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48,
        backgroundColor: 'white',
        marginVertical: 10,
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
    searchIcon: {
        marginHorizontal: 10
    },
    inputLabel: {
        flex: 1,
        fontSize: 16,
        color: 'grey',
        letterSpacing: .5
    },
    filterContainer: {
        height: 30,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: 'lightgrey',
        borderLeftWidth: .6
    }
})