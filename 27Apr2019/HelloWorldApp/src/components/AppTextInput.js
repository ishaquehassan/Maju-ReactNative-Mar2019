import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from "../base/Styles";

export default class AppTextInput extends Component<Props> {

    state = {text:null};

    handleText = (text)=>{
        this.setState({text})
    };

    getText = ()=>this.state.text;
    setText = (text)=>{
        this.setState({text})
    };

    render() {
        const {text} = this.state;
        const {placeholder,isPassword} = this.props;
        return (
            <TextInput placeholder={placeholder} secureTextEntry={isPassword} style={{
                borderBottomWidth: 2,
                borderBottomColor: ((text == null || text.length > 0) ? Colors.primary : "#f00"),
                padding: 0,
                paddingBottom: 5,
                marginTop:15

            }} placeholderTextColor={"#000"}
                       value={text}
                       onChangeText={this.handleText}
            />
        );
    }
}
