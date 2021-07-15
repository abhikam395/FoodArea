import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import LocationButton from '../components/LocationButton';
import LocationSetLocationButton from '../components/LocationSetLocationButton';

export default class LocationScreen extends Component{
    render(){
        return (
            <>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                <View style={styles.container}>
                    <Text style={styles.label1}>Hi, nice to meet you!</Text>
                    <Text style={styles.label2}>Set your location to start exploring restaurants around you</Text>
                    <LocationButton {...this.props}/>
                    <LocationSetLocationButton {...this.props}/>
                    <Text style={styles.bottomLabel}>We only access your location while you are using the app to improve your experience.</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    label1: {
        fontSize: 24
    },
    label2: {
        marginTop: 12,
        marginBottom: 30,
        fontSize: 16,
        textAlign: 'center',
        width: '85%',
        color: '#616161',
        letterSpacing: .5
    },
    bottomLabel: {
        position: 'absolute',
        bottom: 50,
        textAlign: 'center',
        lineHeight: 20,
        color: 'grey',
        fontSize: 14
    }
})