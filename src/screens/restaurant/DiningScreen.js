import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { GREEN, RED } from '../../utils/colors';

const menuImage = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/menu-flyer-template-5632286b490608db0301a085b91cde86_screen.jpg?ts=1561491978";

export default class DiningScreen extends Component{
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <EvilIcons name="location" size={18}/>
                    <View style={styles.itemDetails}>
                        <View style={styles.row}>
                            <Text style={styles.itemTitle}>Location</Text>
                            <TouchableOpacity style={styles.directionButton}>
                                <Text style={styles.directionLabel}>Directions</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemLabel}>
                            Shanti Vihar, Raipur Road, Karanpur, Dehradun
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Ionicons name="time-outline" size={18}/>
                    <View style={styles.itemDetails}>
                        <View style={styles.row}>
                            <Text style={styles.itemTitle}>Timings</Text>
                            <TouchableOpacity style={styles.directionButton}>
                                <Feather name="phone-call" size={20} color={RED}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemLabel}>
                            Shanti Vihar, Raipur Road, Karanpur, Dehradun
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Ionicons name="pricetag-outline" size={18}/>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemTitle}>Cost</Text>
                        <Text style={styles.itemLabel}>
                            Shanti Vihar, Raipur Road, Karanpur, Dehradun
                        </Text>
                    </View>
                </View>
                <View style={styles.line}/>
                <View style={styles.menusContainer}>
                    <Text style={styles.menusTitle}>Menus</Text>
                    <View style={styles.menusImageContainer}>
                        <View style={styles.container1}/>
                        <View style={styles.container2}/>
                        <Image 
                            source={{uri: menuImage}}
                            style={styles.menuImage}/>
                    </View>
                    <View style={styles.foodMenuContainer}>
                        <Text style={styles.menusLabel}>Food Menu</Text>
                        <Text style={styles.menuPageCount}>3 pages</Text>
                    </View>
                    <TouchableOpacity style={styles.fullMenuButton}>
                        <Text style={styles.fullMenuButtonLabel}>See full menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailTitle}>Details</Text>
                    <View style={{marginVertical: 15}}>
                        <Text style={styles.detailLabel}>CUISINES</Text>
                        <View style={styles.cuisineList}>
                            <Text style={styles.cuisine}>North Indian</Text>
                            <Text style={styles.cuisine}>Chinese</Text>
                            <Text style={styles.cuisine}>Fast Food</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.detailLabel}>AVERAGE COST</Text>
                        <Ionicons 
                            name="information-circle-outline" 
                            size={16}
                            style={styles.infoIcon}
                            color="grey"/>
                    </View>
                    <Text style={styles.otherLabel}>450 for two people (approx.)</Text>
                    <Text style={styles.additionInfo}>Exclusive of applicable taxes and charges, if any</Text>
                    <View style={{marginVertical: 15}}>
                        <Text style={styles.otherLabel}>Cash and Cards accepted</Text>
                        <Text style={styles.otherLabel}>Digital payments accepted</Text>
                    </View>
                    <View style={styles.otherInfoContainer}>
                        <Text style={styles.detailLabel}>OTHER INFO</Text>
                        <View style={{marginTop: 10}}>
                            <View style={styles.row}>
                                <Ionicons 
                                    name="checkmark-circle-outline" 
                                    color={GREEN} 
                                    size={20}/>
                                <Text style={styles.otherInfoLabel}>Home Delivery</Text>
                            </View>
                            <View style={styles.row}>
                                <Ionicons 
                                    name="checkmark-circle-outline" 
                                    color={GREEN} row
                                    row
                                    row
                                    row
                                    size={20}/>
                                <Text style={styles.otherInfoLabel}>Takeaway Available</Text>
                            </View>
                            <View style={styles.row}>
                                <Ionicons 
                                    name="checkmark-circle-outline" 
                                    color={GREEN} 
                                    size={20}/>
                                <Text style={styles.otherInfoLabel}>Indoor Seating</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 15,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },  
    itemTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    directionButton: {
        marginLeft: 'auto'
    },    
    row: {
        flexDirection: 'row',
    },
    directionLabel: {
        color: RED,
        fontSize: 13
    },
    itemLabel: {
        fontSize: 13,
        marginTop: 5,
        color: 'grey'
    },
    line: {
        height: .3,
        backgroundColor: 'lightgrey',
        marginVertical: 5
    },
    menusContainer: {
        paddingVertical: 10,
    },
    menusImageContainer: {
        alignItems: 'center',
        width: 120,
        marginVertical: 10,
        position: 'relative'
    },
    menuImage: {
        height: 140,
        width: 120,
        top: 10,
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    container1: {
        width: 90,
        height: 100,
        borderWidth: .3,
        borderColor: 'lightgrey',
        borderRadius: 5,
        position: 'absolute'
    },
    container2: {
        width: 100,
        height: 100,
        borderWidth: .3,
        borderColor: 'lightgrey',
        borderRadius: 5,
        position: 'absolute',
        top: 5
    },
    menusLabel: {
        
    },
    foodMenuContainer: {
        marginTop: 10
    },
    menuPageCount: {
        fontSize: 12,
        color: 'grey'
    },
    fullMenuButton: {
        height: 50,
        borderWidth: 1,
        borderColor: RED,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    fullMenuButtonLabel: {
        color: RED,
        fontSize: 16
    },
    detailContainer: {

    },
    cuisineList: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    detailTitle: {
        fontSize: 16
    },
    detailLabel: {
        marginBottom: 10,
        color: 'grey',
        fontSize: 12
    },
    cuisine: {
        color: RED,
        marginRight: 20,
        fontSize: 12
    },
    infoIcon: {
        marginLeft: 5
    },
    otherLabel: {
        fontSize: 12
    },
    additionInfo: {
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },
    otherInfoLabel: {
        marginLeft: 5,
        color: 'grey'
    }
})