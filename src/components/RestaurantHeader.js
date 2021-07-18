import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

export default class RestaurantHeader extends Component{

    constructor(){
        super();
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        let {navigation} = this.props;
        navigation.goBack();
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack}>
                    <MaterialIcons name="arrow-back-ios" size={20}/>
                </TouchableOpacity>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Feather name="camera" size={18} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="bookmark" size={18} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="share" size={18}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    icons: {
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    icon: {
        marginRight: 25
    }
})