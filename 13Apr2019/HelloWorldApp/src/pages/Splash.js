import React, {Component} from 'react';
import {View,Image,TouchableOpacity,Text} from 'react-native';
import {DrawerActions} from "react-navigation";
import Button from "../components/Button";
import {resetStack} from "../base/Utils";

export default class Splash extends Component {
    static navigationOptions = ({navigation}) => (
        {
            title: "Splash",
            header:null
        }
    );

    componentDidMount(): void {
        setTimeout(this.gotoLogin,1000)
    }

    gotoLogin = ()=>resetStack(this.props.navigation,"Login");

    render() {
        return (
            <View style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:50}}>OLX</Text>
            </View>
        );
    }
}