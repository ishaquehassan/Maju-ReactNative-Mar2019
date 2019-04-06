/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from "./src/components/Button";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"hello",
            pageBgIndex:1
        };
    }

    onPress1 = () => {
        this.setState({
            pageBgIndex: 1
        })
    };

    onPress2 = () => {
        this.setState({
            pageBgIndex: 2
        })
    };

    onPress3 = () => {
        this.setState({
            pageBgIndex:3
        })
    };

    render() {
        const {pageBgIndex} = this.state;
        const bgs = ["#000","#ccc","#f00","#00f"];
        return (
            <View style={{flex: 1, backgroundColor: bgs[pageBgIndex], justifyContent: "center"}}>
                <Button bg="#f00" text="Button" onPress={this.onPress1}/>
                <Button text="Btn" onPress={this.onPress2}/>
                <Button text="hello" onPress={this.onPress3}/>
            </View>
        );
    }
}

