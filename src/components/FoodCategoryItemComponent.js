import React, {Component} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class FoodCategoryItemComponent extends Component{
    render(){
        let {category} = this.props;
        let {name, image} = category;
        return (
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.image}/>
                <Text style={styles.name}>{name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '25%',
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    name: {
        fontSize: 12,
        marginVertical: 5,
        fontWeight: 'bold',
        color: 'grey',
        letterSpacing: .2
    }
})