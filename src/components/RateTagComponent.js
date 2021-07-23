import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function RateTagComponent({color, rating}){
    let style = Object.assign({...styles.rateItem}, {backgroundColor: color})
    return (
        <View style={style}>
            <Text style={styles.rating}>{rating}</Text>
            <MaterialIcons 
                name="star" 
                color="white"
                size={10}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        paddingHorizontal: 5,
        borderRadius: 5,
        width: 36
    },
    rating: {
        color: 'white',
        fontSize: 10,
    },
})