import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,TextInput} from 'react-native';
import {DrawerActions} from "react-navigation";
import {Colors} from "../base/Styles";

export default class Login extends Component {
    static navigationOptions =  ({navigation}) => ({
        title: "Login",
        headerLeft: (
            <TouchableOpacity onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer())
            }}>
                <Image source={require('./../assets/images/drawer-icon.png')}
                       style={{width: 25, height: 25, tintColor: "#fff", marginLeft: 20}}/>
            </TouchableOpacity>
        )
    });

    state = {
        emailText:null
    };

    handleEmailText = (emailText)=>{
      this.setState({emailText})
    };

    render() {
        const {emailText} = this.state;
        //const {params} = this.props.navigation.state;
        return (
            <View style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
                <View style={{width:"80%"}}>
                    <Text style={{fontSize:30,alignSelf:"center"}}>Login</Text>
                    <TextInput placeholder="Email" style={{
                        borderBottomWidth:2,
                        borderBottomColor:((emailText == null || emailText.length > 0) ? Colors.primary : "#f00"),
                        padding:0,
                        paddingBottom:5

                    }} placeholderTextColor={"#000"}
                               value={emailText}
                    onChangeText={this.handleEmailText}
                    />
                </View>

            </View>
        );
    }
}
