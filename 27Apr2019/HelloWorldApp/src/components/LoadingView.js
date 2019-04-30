import React, {Component} from 'react';
import {View, Text, ActivityIndicator, Platform} from 'react-native';
import {Colors} from "../base/Styles";

export default class LoadingView extends Component<Props> {
    render() {
        return (
            <View style={{width:"100%",height:"100%",position:"absolute",alignItems:"center",justifyContent:"center",top:0,left:0,backgroundColor:"rgba(255,255,255,0.7)"}}>
                <ActivityIndicator size={Platform.select({ios:1,android:50})} color={Colors.primary} />
            </View>
        );
    }
}
