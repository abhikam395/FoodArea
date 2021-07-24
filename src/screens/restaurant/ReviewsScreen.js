import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RestaurantReviewHighlights from '../../components/RestaurantReviewHighlights';
import RestaurantSearchTags from '../../components/RestaurantSearchTags';
import RestaurantSearchReview from '../../components/RestaurantSearchReview';
import { GREEN, RED } from '../../utils/colors';
import RestaurantReviewList from '../../components/RestaurantReviewList';
import RateTagComponent from '../../components/RateTagComponent';

export default class ReviewsScreen extends Component{

    constructor(){
        super();
        this.navigateToAddReview = this.navigateToAddReview.bind(this);
    }

    navigateToAddReview(){
        let {navigation} = this.props;
        navigation.navigate('AddReview');
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.reviewContainer}>
                    <View>
                        <Text style={styles.title}>Write a review</Text>
                        <Text style={styles.label}>Share your experience to help others</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.reviewButton}
                        onPress={this.navigateToAddReview}>
                        <FontAwesome 
                            name="pencil-square-o" 
                            color={RED} 
                            size={22} 
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.ratingContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <RateTagComponent color="green" rating={4.2}/>
                        <View style={{marginLeft: 5}}>
                            <Text style={styles.totalDelivery}>4,203 DELIVERY</Text>
                            <View style={styles.totalDeliveryLine}/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <RateTagComponent color="green" rating={3.4} />
                        <View style={{marginLeft: 5}}>
                            <Text style={styles.totalDelivery}>203 DINING</Text>
                            <View style={styles.totalDeliveryLine}/>
                        </View>
                    </View>
                </View>
                <View style={styles.reviewHighLightContainer}>
                    <Text style={styles.title}>Review Highlights</Text>
                    <RestaurantReviewHighlights />
                </View>
                <View style={styles.line}/>
                <RestaurantSearchReview />
                <RestaurantSearchTags />
                <View style={styles.line}/>
                <RestaurantReviewList />
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
        fontSize: 15
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
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 30
    },
    rateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        paddingHorizontal: 5,
        backgroundColor: 'green',
        borderRadius: 5
    },
    rating: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    totalDelivery: {
        color: 'grey',
        fontSize: 12,
    },
    totalDeliveryLine: {
        marginTop: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: .3,
        borderColor: 'grey',
    },
    line: {
        marginVertical: 15,
        borderWidth: .2,
        borderColor: 'lightgrey'
    }
})