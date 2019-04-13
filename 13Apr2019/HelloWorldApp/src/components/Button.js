import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {
    render() {
        const {onPress,text} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} style={{alignSelf:"center",backgroundColor:(this.props.bg || "#000"),padding:10,borderRadius:10}} onPress={(onPress ? onPress :  ()=>{
                alert("default")
            })}>
                <Text style={{fontSize:20,color:"#fff"}}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    }
}