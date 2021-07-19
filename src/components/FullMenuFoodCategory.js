import React, {PureComponent} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RestaurantFoodItem from './RestaurantFoodItem';

const FOODS = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
]

export default class FullMenuFoodCategory extends PureComponent{

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
        let {name } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row}>   
                    <Text style={styles.title}>{name}</Text>
                    <TouchableOpacity
                        onPress={this.toggleDropDown} 
                        style={styles.dropDownButton}>
                        <MaterialIcons 
                            name={visible ? 'arrow-drop-up' : 'arrow-drop-down'}
                            size={30}/>
                    </TouchableOpacity>
                </View>
                {visible && (
                    <FlatList 
                        data={FOODS}
                        listKey={name}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => (<RestaurantFoodItem item={item}/>)}
                        ItemSeparatorComponent={() => <View style={styles.line}/>}/>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10
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
    },
    line: {
        height: .3,
        backgroundColor: 'lightgrey'
    }
})