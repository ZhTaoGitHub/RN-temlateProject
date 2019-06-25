import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types'


export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        activeOpacity: 0.2,
        onPress: () => { ToastAndroid.show('你按下了', ToastAndroid.SHORT) },
        title: '按钮',
        color: '#fefefe',
        size: 14,
        titleStyle: {},
        borderColor: '#C31C2400',
        borderRadius: 50,
        borderWidth: 0.5,
        borderStyle: {},
        backgroundColor: '#C31C24',
        paddingVertical: 8,
        paddingHorizontal: 32,
        buttonStyle: {},
    }

    static propTypes = {
        activeOpacity: PropTypes.number,
        onPress: PropTypes.func,
        title: PropTypes.string,
        titleStyle: PropTypes.object,
        backgroundColor: PropTypes.string,
        borderStyle: PropTypes.object,
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={this.props.activeOpacity}
                onPress={this.props.onPress}
                style={[
                    styles.button,
                    {
                        borderColor: this.props.borderColor,
                        borderRadius: this.props.borderRadius,
                        borderWidth: this.props.borderWidth,
                        backgroundColor: this.props.backgroundColor,
                        paddingVertical: this.props.paddingVertical,
                        paddingHorizontal: this.props.paddingHorizontal,
                    },
                    { ...this.props.borderStyle },
                    { ...this.props.buttonStyle },
                ]}
            >
                <Text style={[
                    {
                        color: this.props.color,
                        fontSize: this.props.size,
                    },
                    { ...this.props.titleStyle }]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})