import React, { Component } from 'react';
import {StyleSheet, View, Text, SectionList, TouchableOpacity} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GREEN, RED } from '../../utils/colors';
import FullMenuFoodCategory from '../../components/FullMenuFoodCategory';

export default class FullMenuScreen extends Component{

    constructor(){
        super();
        this.state = {
            isVeg: false,
            hasEgg: false
        }
    }

    render(){
        let {isVeg, hasEgg} = this.state;
        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <ToggleSwitch
                        isOn={isVeg}
                        onColor={GREEN}
                        offColor="lightgrey"
                        label="Veg"
                        labelStyle={{ color: "black", fontWeight: "900", fontSize: 12 }}
                        size="small"
                        onToggle={isOn => this.setState({isVeg: isOn})}
                    />
                    <ToggleSwitch
                        isOn={hasEgg}
                        onColor="orange"
                        offColor="lightgrey"
                        label="Egg"
                        labelStyle={{ color: "black", fontWeight: "900", fontSize: 12 }}
                        size="small"
                        onToggle={isOn => this.setState({hasEgg: isOn})}
                    />
                    <View style={styles.searchbar}>
                        <AntDesign name="search1" size={20} color={RED}/>
                        <Text style={styles.searchLabel}>Search</Text>
                    </View>
                </View>
                <FullMenuFoodCategory name="Recommended"/>
                <FullMenuFoodCategory name="South Indian" />
                <FullMenuFoodCategory name="Platter" />
                <FullMenuFoodCategory name="Desserts and Beverages" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderTopWidth: .2,
        borderBottomWidth: .2,
        borderColor: 'lightgrey',
        alignItems: 'center'
    },
    searchbar: {
        width: 120,
        borderRadius: 10,
        height: 36,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginLeft: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 5
    },
    searchLabel: {
        fontSize: 14,
        color: 'grey',
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
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