import React, { Component } from 'react';
import { StyleSheet, Text as NText, } from 'react-native';
import PropTypes from 'prop-types'


export default class Text extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        content: '',
        style: {},
    }

    static propTypes = {
        content: PropTypes.string,
        style: PropTypes.object,
    }

    render() {
        return (
            <NText style={[{ fontFamily: 'Alibaba-PuHuiTi-Regular' }, { ...this.props.style }]}>{this.props.content}</NText>
        )
    }
}

const styles = StyleSheet.create({

})