import React, { Component } from 'react';
import { StyleSheet, View, Text, NativeModules, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import _ from "lodash";


export default class Share extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar
                    text='分享'
                    textStyle={{ color: '#fefefe' }}
                    leftIcon={() => { return <Text></Text> }}
                    statusBar='light'
                />
                <View style={styles.content}>
                    <Button />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefefe',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    }
});
