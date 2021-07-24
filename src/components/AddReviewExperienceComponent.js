import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { RED } from '../utils/colors';

const data = [
    {label: 'Dining'},
    {label: 'Delivery'}
]

export default class AddReviewExperienceComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Rate your experience for</Text>
                <View style={styles.options}>
                    <RadioButtonRN
                        style={{flexDirection: 'row'}}
                        box={false}
                        boxStyle={styles.radioButton}
                        textStyle={styles.radioButtonLabel}
                        data={data}
                        activeColor={RED}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 18
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: 200,
        paddingHorizontal: 10
    },
    radioButtonLabel: {
        marginLeft: 15, 
        fontSize: 15
    },
    radioButton: {
        flex: 1
    }
})