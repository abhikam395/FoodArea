import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { GREEN } from '../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import LeafIcon from './../assets/icons/leaf.png';

export default class HomeRestaurantComponent extends Component{

    constructor(){
        super();
        this.state = {
            bookmark: false
        }
    }

    render(){
        let {restaurant } = this.props;
        let {bookmark} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: restaurant.image}} style={styles.image}/>
                    <TouchableOpacity style={styles.bookmarkButton}>
                        <MaterialIcons 
                            name={bookmark ? "bookmark": "bookmark-border"}
                            size={20}
                        />
                    </TouchableOpacity>
                    <View style={styles.promoted}>
                        <Text style={styles.promotedLabel}>Promoted</Text>
                    </View>
                    <LinearGradient
                        start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                        colors={['#ea80fc', '#aa00ff']} 
                        style={styles.offerContainer}>
                        <View style={styles.offerRow}>
                            <MaterialCommunityIcons name="brightness-percent" color="white" size={12}/>
                            <View style={{marginHorizontal: 5}}>
                                <Text style={styles.offer}>60% OFF</Text>
                                <Text style={styles.offerLabel}>Up to &#8377;120</Text>
                            </View>
                        </View>
                    </LinearGradient>
                    <View style={styles.deliveryTimeContainer}>
                        <Text style={styles.deliveryTime}>30 mins</Text>
                    </View>
                </View>
                <View style={styles.restaurantInfo}>
                    <View style={styles.row}>
                        <Text style={styles.restaurantName}>Ovenstory Pizza</Text>
                        <View style={styles.rating}>
                            <Text style={styles.ratingCount}>3.6</Text>
                            <MaterialIcons 
                                name="star" 
                                color="white" 
                                size={12}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.restaurantType}>Pizza, Italian</Text>
                        <Text style={styles.price}>&#8377; 200 for one</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <Image source={LeafIcon} style={styles.leafIcon} />
                        <Text style={styles.label}>FoodArea funds environmental projects to offset delivery carbon footprint</Text>
                        <MaterialIcons 
                            name="trending-up" 
                            style={styles.trendingIcon} 
                            color="white" 
                            size={13}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 4,
        marginBottom: 30,
        marginHorizontal: 2,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    imageContainer: {
        height: 200
    },
    image: {
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    restaurantInfo: {
        padding: 10
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    restaurantName: {
        fontSize: 16
    },
    rating: {
        height: 22,
        width: 45,
        borderRadius: 5,
        backgroundColor: GREEN,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    ratingCount: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    restaurantType: {
        fontSize: 13,
        color: 'grey',
        marginTop: 5
    },
    price: {
        fontSize: 13,
        color: 'grey',
        marginLeft: 'auto'
    },
    line: {
        borderBottomWidth: .4,
        borderColor: 'lightgrey',
        marginVertical: 10
    },
    leafIcon: {
        width: 18,
        height: 18
    },
    label: {
        fontSize: 12,
        color: 'grey',
        marginHorizontal: 5,
        lineHeight: 16
    },
    trendingIcon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#ba68c8",
        textAlign: "center",
        textAlignVertical: "center",
    },
    bookmarkButton: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 15,
        position: 'absolute',
        right: 0,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    promoted: {
        position: 'absolute',
        left: 0,
        margin: 12,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 5,
        paddingHorizontal: 5,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    promotedLabel: {
        color: 'white',
        fontSize: 12,
    },
    deliveryTimeContainer: {
        height: 22,
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deliveryTime: {
        fontSize: 12
    },
    offerContainer: {
        backgroundColor: '#42a5f5',
        position: 'absolute',
        bottom: 15,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10,
        padding: 5
    },
    offerRow: {
        flexDirection: 'row'
    },
    offer: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    offerLabel: {
        fontSize: 13,
        color: 'white'
    }
})