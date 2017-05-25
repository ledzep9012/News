import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import AppBodyData from './appBodyData';

export default class AppBody extends Component {

    render() {
        console.log("props", this.props.data);

        return (
            <AppBodyData data={this.props.data} />
        );
    }
}

module.export = AppBody;
