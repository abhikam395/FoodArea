import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import RestaurantHeader from '../components/RestaurantHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RestaurantTabNavigation from '../navigations/RestaurantTabNavigation';

const imageUrl = "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBjb2xsZWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

export default class RestaurantScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <RestaurantHeader />
                <FlatList 
                    ListEmptyComponent={
                        <>
                            <View style={styles.restaurantInfo}>
                                <View style={styles.leftContainer}>
                                    <Text style={styles.title}>Garden Of Taste</Text>
                                    <Text style={styles.foodtype}>North Indian, Chinese, Mughlai</Text>
                                    <Text style={styles.address}>Dharampur, Dehradun</Text>
                                </View>
                                <View style={styles.rightContainer}>
                                    <View style={styles.delivery}>
                                        <View style={styles.row}>
                                            <Text style={styles.count}>2.4</Text>
                                            <MaterialIcons name="star" color="white" size={12}/>
                                        </View>
                                        <Text style={styles.label}>DELIVERY</Text>
                                    </View>
                                    <View style={styles.photos}>
                                        <Image source={{uri: imageUrl}} style={styles.image}/>
                                        <Text style={styles.count}>6</Text>
                                        <Text style={styles.label}>PHOTOS</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.tabsContainer}>
                                <RestaurantTabNavigation/>
                            </View>
                        </>
                    }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    restaurantInfo: {
        paddingLeft: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    foodtype: {
        fontSize: 13,
        marginTop: 5
    },
    address: {
        color: 'grey',
        fontSize: 13,
        marginTop: 5
    },
    rightContainer: {
        width: 100,
        marginLeft: 'auto'
    },
    delivery: {
        backgroundColor: '#43a047',
        height: 46,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 5,
        justifyContent: 'center',
        paddingLeft: 10
    },
    photos: {
        height: 46,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 5
    },
    rightContainer: {
        marginLeft: 'auto',
        width: 80
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    count: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 5
    },
    label: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    image: {
        height: 46,
        position: 'absolute',
        width: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        opacity: .7
    },
    tabsContainer: {
        padding: 10,
        flex: 1
    }
})