import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RED } from '../utils/colors';
import RateTagComponent from './RateTagComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RestaurantReviewItem extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userProfile}>
                        <MaterialIcons 
                            name="person" 
                            size={18} 
                            color="white"/>
                    </View>
                    <View style={styles.headerCenterContainer}>
                        <Text style={styles.label}>Shashank wrote a 5 start review</Text>
                        <Text style={styles.followerCount}>0 Followers</Text>
                    </View>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonLabel}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ratingContainer}>
                    <RateTagComponent color="green" rating={5}/>
                    <Text style={styles.status}>delivery</Text>
                </View>
                <View style={styles.line}/>
                <Text style={styles.comment}>The quality of pizza has improved, keep it up guys, I hope that you keep on increasing the quality to match the qaulity of the multinational food chains.</Text>
                <Text style={styles.commentDate}>4 days ago</Text>
                <View style={styles.options}>
                    <View style={styles.option}>
                        <AntDesign name="like2" size={18}/>
                        <Text style={styles.optionLabel}>Like</Text>
                    </View>
                    <View style={styles.option}>
                        <MaterialCommunityIcons name="comment-text-multiple-outline" size={18}/>
                        <Text style={styles.optionLabel}>Comment</Text>
                    </View>
                    <View style={styles.option}>
                        <MaterialCommunityIcons name="share" size={18}/>
                        <Text style={styles.optionLabel}>Share</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userProfile: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 0, 0, .4)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerCenterContainer: {
        paddingHorizontal: 10
    },
    label: {

    },
    followerCount: {
        color: 'grey',
        fontSize: 13
    },
    followButton: {
        height: 28,
        borderWidth: 1,
        borderColor: RED,
        borderRadius: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    followButtonLabel: {
        color: RED,
        fontSize: 13
    },
    status: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 12
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    line: {
        height: .4,
        backgroundColor: 'lightgrey',
        marginVertical: 10
    },
    comment: {
        paddingBottom: 15,
        fontSize: 15,
        color: 'grey',
        lineHeight: 23,
        letterSpacing: .1
    },
    commentDate: {
        color: '#bdbdbd',
        fontSize: 13
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'lightgrey',
        borderTopWidth: .3,
        marginTop: 10
    },
    option: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionLabel: {
        marginLeft: 5,
        fontSize: 13
    }
})