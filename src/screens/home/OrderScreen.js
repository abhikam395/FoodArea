import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import FoodCategoriesComponent from '../../components/FoodCategoriesComponent';
import HomeHeaderComponent from '../../components/HomeHeaderComponent';
import HomeTagsComponent from '../../components/HomeTagsComponent';
import SearchbarComponent from '../../components/SearchbarComponent';
import HomeRestaurantsComponent from '../../components/HomeRestaurantsComponent';

export default class OrderScreen extends Component{
    render(){
        return (
            <FlatList
                listKey={0}
                style={styles.container}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <>
                        <StatusBar backgroundColor="white" barStyle="dark-content"/>
                        <HomeHeaderComponent {...this.props}/>
                        <SearchbarComponent />
                        <FoodCategoriesComponent />
                        <HomeRestaurantsComponent />
                    </>
                }/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    }
})