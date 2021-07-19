import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class RestaurantRecommended extends Component{

    constructor(){
        super();
        this.state = {
            visible: true
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleDropDown(){
        let {visible} = this.state;
        this.setState({visible: !visible});
    }

    render(){
        let {visible} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.row}>   
                    <Text style={styles.title}>Recommended</Text>
                    <TouchableOpacity
                        onPress={this.toggleDropDown} 
                        style={styles.dropDownButton}>
                        <MaterialIcons 
                            name={visible ? 'arrow-drop-up' : 'arrow-drop-down'}
                            size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: .2,
        color: '#263238'
    },
    dropDownButton: {
        marginLeft: 'auto'
    }
})