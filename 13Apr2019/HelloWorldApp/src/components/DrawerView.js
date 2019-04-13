import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Colors} from "../base/Styles";

export default class DrawerView extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor:Colors.drawerBg}}>
                <Text>DrawerLayout</Text>
            </View>
        );
    }
}
