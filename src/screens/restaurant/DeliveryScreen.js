import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeliveryTabNavigation from '../../navigations/DeliveryTabNavigation';

export default class DeliveryScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <View style={styles.item}>
                        <View style={styles.button}>
                            <Fontisto name="motorcycle" size={16}/>
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.itemLabel}>MODE</Text>
                                <MaterialIcons name="arrow-drop-down"/>
                            </View>
                            <Text style={styles.itemOtherLabel}>delivery</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.button}>
                            <MaterialCommunityIcons name="progress-clock" size={16}/>
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.itemLabel}>TIME</Text>
                            </View>
                            <Text style={styles.itemOtherLabel}>33 mins</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.button}>
                            <MaterialCommunityIcons name="brightness-percent" size={16} color="#304fff"/>
                        </View>
                        <View>
                            <View style={styles.row}>
                                <Text style={styles.itemLabel}>OFFERS</Text>
                                <MaterialIcons name="arrow-drop-down"/>
                            </View>
                            <Text style={styles.itemOtherLabel}>view all (4)</Text>
                        </View>
                    </View>
                </View>
                <DeliveryTabNavigation />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        height: 34,
        width: 34,
        borderRadius: 17,
        elevation: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    itemLabel: {
        fontSize: 9,
        letterSpacing: 1
    },
    itemOtherLabel: {
        fontSize: 11
    },
    items: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 5
    }
})