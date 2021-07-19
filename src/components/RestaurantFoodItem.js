import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GREEN, RED } from '../utils/colors';

export default class RestaurantFoodItem extends Component{
    render(){
        let {item} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Foundation 
                        name="record"
                        size={20} 
                        style={styles.foodTypeIcon} 
                        color={item.id % 2 !== 0 ? RED : GREEN} 
                    />
                    <Text style={styles.name}>Chicken Curry</Text>
                    <Text style={styles.label}>In Main Course</Text>
                    <Text style={styles.price}>&#x20B9; 240</Text>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.buttonLabel}>ADD</Text>
                        <MaterialIcons 
                            name="add" 
                            color={RED} 
                            size={16}
                            style={styles.addIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.label}>customizable</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        paddingRight: 1
    },
    leftContainer: {

    },
    rightContainer: {
        marginLeft: 'auto',
        alignItems: 'center'
    },
    addButton: {
        height: 35,
        width: 90,
        borderRadius: 10,
        borderWidth: .4,
        borderColor: RED,
        backgroundColor: 'rgba(255, 0, 0, .05)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: RED,
        fontWeight: 'bold',
        fontSize: 13
    },
    addIcon: {
        marginLeft: 5
    },
    label: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },
    price: {
        marginTop: 5,
        fontSize: 12
    },
    foodTypeIcon: {
        marginBottom: 5
    },
    name: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    }
})