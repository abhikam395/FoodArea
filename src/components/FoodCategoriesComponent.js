import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FOOD_CATEGORIES } from '../utils/dummydata';
import FoodCategoryItemComponent from './FoodCategoryItemComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TYPE = {
    HIDE: 'HIDE',
    SHOW: 'SHOW'
}

export default class FoodCategoriesComponent extends Component{

    constructor(){
        super();
        this.state = {
            buttonType: TYPE.HIDE
        }
        this.toggerSeeButton = this.toggerSeeButton.bind(this);

    }

    toggerSeeButton(){
        let {buttonType} = this.state;
        if(buttonType === TYPE.HIDE)
            this.setState({buttonType: TYPE.SHOW});
        else
            this.setState({buttonType: TYPE.HIDE});
    }

    getData(){
        let {buttonType} = this.state;
        return buttonType === TYPE.HIDE ? FOOD_CATEGORIES.slice(0, 8) : FOOD_CATEGORIES;
    }

    render(){
        let {buttonType} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Eat what makes you happy</Text>
                <FlatList 
                    data={this.getData()}
                    numColumns={4}
                    style={styles.listContainer}
                    columnWrapperStyle={{marginVertical: 10}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (<FoodCategoryItemComponent category={item}/>)}
                    keyExtractor={item => item.id.toString()}
                    listKey={1}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.toggerSeeButton}>
                    <Text style={styles.buttonLabel}>see more</Text>
                    <MaterialIcons 
                        name={buttonType === TYPE.HIDE? "keyboard-arrow-down": "keyboard-arrow-up"} 
                        size={18}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: .4
    },
    listContainer: {
        marginVertical: 10,
    },
    button: {
        height: 33,
        borderWidth: .5,
        borderColor: 'lightgrey',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    buttonLabel: {
        fontSize: 12
    }
})