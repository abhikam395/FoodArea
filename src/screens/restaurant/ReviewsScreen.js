import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GREEN, RED } from '../../utils/colors';

export default class ReviewsScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.reviewContainer}>
                    <View>
                        <Text style={styles.title}>Write a review</Text>
                        <Text style={styles.label}>Share your experience to help others</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.reviewButton}>
                        <FontAwesome 
                            name="pencil-square-o" 
                            color={RED} 
                            size={22} 
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.ratingContainer}>
                    <View style={styles.rateItem}>
                        <Text style={styles.rating}>4.1</Text>
                        
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    reviewContainer: {
        paddingVertical: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: .4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 14
    },
    label: {
        marginTop: 2,
        fontSize: 12,
        color: 'grey'
    },
    reviewButton: {
        marginLeft: 'auto'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        borderRadius: 5
    },
    rating: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
})