/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View,StatusBar} from 'react-native';
import {AppNavigation} from "./src/Navigation";
import {Colors} from "./src/base/Styles";

export default class App extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={"transparent"} translucent={true} barStyle={"light-content"} />
                <AppNavigation />
            </View>
        );
    }
}

