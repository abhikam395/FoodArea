import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { RESTAURANTS } from '../utils/dummydata';
import HomeRestaurantComponent from './HomeRestaurantComponent';

export default class HomeRestaurantsComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>447 restaurants around you</Text>
                <FlatList 
                    listKey={2}
                    style={styles.list}
                    data={RESTAURANTS}
                    renderItem={({item}) => <HomeRestaurantComponent restaurant={item}/>}
                    keyExtractor={item => item.id.toString()}
                    // ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 30
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: .4
    },
    separator: {
        height: 30,
        flex: 1
    },
    list: {
        marginTop: 25
    }
})