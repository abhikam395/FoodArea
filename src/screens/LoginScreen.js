import React, {Component} from 'react';
import { RED } from '../utils/colors';
import { StyleSheet, View, StatusBar, Text, Linking } from 'react-native';
import LoginInputComponent from '../components/LoginInputComponent';
import LoginSendOptButton from '../components/LoginSentOptButton';
import LoginEmailButton from '../components/LoginEmailButton';
import LoginFBButton from '../components/LoginFBButton';
import LoginGoogleButton from '../components/LoginGoogeButton';
import { Link } from '@react-navigation/native';

export default class LoginScreen extends Component{
    render(){
        return (
            <>
                <StatusBar translucent backgroundColor={RED}/>
                <View style={styles.container}>
                   <LoginInputComponent />
                   <LoginSendOptButton />
                   <View style={styles.divider}>
                        <View style={styles.line}/>
                        <Text style={styles.dividerLabel}>OR</Text>
                        <View style={styles.line}/>
                   </View>
                   <LoginEmailButton />
                   <View style={styles.buttons}>
                       <LoginFBButton />
                       <LoginGoogleButton />
                   </View>
                   <View style={styles.policyContainer}>
                    <Text style={styles.policy}>By continuing, you agree to our</Text>
                    <View style={styles.links}>
                        <View style={styles.link}>
                            <Text style={styles.policy}>Terms of Service</Text>
                            <View style={styles.dottedLine}/>
                        </View>
                        <View style={styles.link}>
                            <Text style={styles.policy}>Privacy Policy</Text>
                            <View style={styles.dottedLine}/>
                        </View>
                        <View style={styles.link}>
                            <Text style={styles.policy}>Content Policy</Text>
                            <View style={styles.dottedLine}/>
                        </View>
                    </View>
                   </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: RED,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    divider: {
        width: '100%',
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        flex: 1,
        borderWidth: 0,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: .19,
    },
    dividerLabel: {
        marginHorizontal: 10,
        color: 'lightgrey',
        fontSize: 12
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 15
    },
    policyContainer:{
        position: 'absolute',
        bottom: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    policy: {
        color: 'white',
        fontSize: 11
    },
    links: {
        flexDirection: 'row',
        marginTop: 3
    },
    link: {
        marginHorizontal: 5,
        flexWrap: 'wrap',
    },
    dottedLine: {
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'white'
    }
})