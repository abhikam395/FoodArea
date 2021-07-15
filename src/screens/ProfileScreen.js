import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class ProfileScreen extends Component{

    constructor(){
        super();
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        let {navigation } = this.props;
        navigation.goBack();
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={this.goBack}>
                    <MaterialIcons name="arrow-back" size={22}/>
                </TouchableOpacity>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.name}>Abhishek</Text>
                        <Text style={styles.email}>abhikam395@gmail.com</Text>
                        <View style={styles.row}>
                            <Text style={styles.viewActivityLabel}>View activity</Text>
                            <MaterialIcons 
                                name="arrow-right" 
                                color="#ff4081" 
                                size={18}
                            />
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <Text style={styles.profileName}>A</Text>
                    </View>
                </View>
                <View style={styles.line}/>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialIcons name="bookmark-border" size={20} color="#616161"/>
                        <Text style={styles.buttonLabel}>Bookmarks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <MaterialIcons name="notifications-none" size={20} color="#616161"/>
                        <Text style={styles.buttonLabel}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="settings-outline" size={20} color="#616161"/>
                        <Text style={styles.buttonLabel}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="credit-card" size={20} color="#616161"/>
                        <Text style={styles.buttonLabel}>Payments</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="star-border" size={20} color="#616161"/>
                    </View>
                    <Text style={styles.optionLabel}>Your Rating</Text>
                    <View style={styles.starContainer}>
                        <Text style={{color: 'grey'}}>--</Text>
                        <MaterialIcons name="star" color="grey"/>
                    </View>
                </View>
                <View style={styles.line}/>
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="star-border" size={20} color="#616161"/>
                    </View>
                    <Text style={styles.optionLabel}>FoodArea Pro</Text>
                </View>
                <View style={styles.line}/>
                <Text style={styles.label}>FOOD ORDERS</Text>
                <View style={styles.subOption}>
                    <View style={styles.iconContainer}>
                        <Feather name="shopping-bag" size={18} color="#616161"/>
                    </View>
                    <Text style={styles.subOptionLabel}>Your Orders</Text>
                </View>
                <View style={styles.subOption}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="favorite-border" size={18} color="#616161"/>
                    </View>
                    <Text style={styles.subOptionLabel}>Favorite Orders</Text>
                </View>
                <View style={styles.subOption}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="address-book-o" size={18} color="#616161"/>
                    </View>
                    <Text style={styles.subOptionLabel}>Address Book</Text>
                </View>
                <View style={styles.subOption}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="message-processing-outline" size={18} color="#616161"/>
                    </View>
                    <Text style={styles.subOptionLabel}>Online Ordering Help</Text>
                </View>
                <View style={styles.subOption}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="info-outline" size={18} color="#616161"/>
                    </View>
                    <Text style={styles.subOptionLabel}>About</Text>
                </View>
                <TouchableOpacity style={styles.otherButton}>
                    <Text style={styles.otherButtonLabel}>Send Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherButton}>
                    <Text style={styles.otherButtonLabel}>Report a Safety Emergency</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherButton}>
                    <Text style={styles.otherButtonLabel}>Rate us on the Play Store</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherButton}>
                    <Text style={styles.otherButtonLabel}>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    backButton: {
        marginTop: 10,
        marginBottom: 20
    },
    name: {
        fontSize: 26,
    },
    email: {
        marginVertical: 5,
        fontSize: 15
    },
    viewActivityLabel: {
        color: '#ff4081',
        fontSize: 13,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileContainer: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#448aff',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileName: {
        fontSize: 46,
        color: 'white'
    },
    line: {
        marginVertical: 12,
        borderBottomWidth: .5,
        borderBottomColor: 'lightgrey'
    },
    buttons: {
        flexDirection: 'row',
        marginVertical: 5
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 11,
        color: '#616161'
    },
    iconContainer: {
        height: 30,
        width: 30,
        backgroundColor: '#eceff1',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    starContainer: {
        paddingHorizontal: 10,
        backgroundColor: '#eceff1',
        flexDirection: 'row',
        alignItems: 'center' ,
        borderRadius: 5,
        marginLeft: 'auto'
    },
    optionLabel: {
        fontSize: 15,
        marginLeft: 15,
        color: '#616161'
    },
    label: {
        color: 'grey',
        fontSize: 13,
        marginVertical: 5
    },
    subOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    subOptionLabel: {
        fontSize: 14,
        marginLeft: 10,
        color: '#616161'
    },
    otherButton: {
        marginVertical: 10,
    },
    otherButtonLabel: {
        color: '#616161',
        fontSize: 14
    }
})