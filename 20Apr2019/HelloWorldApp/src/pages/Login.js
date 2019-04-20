import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput,ActivityIndicator,Platform} from 'react-native';
import {DrawerActions} from "react-navigation";
import {Colors} from "../base/Styles";
import firebase from 'react-native-firebase';
import LoadingView from "../components/LoadingView";
import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";

export default class Login extends Component {
    static navigationOptions = ({navigation}) => ({
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
        emailText: null
    };

    componentDidMount(): void {
        if(firebase.auth().currentUser){
            //alert("Logged In")
        }
    }

    signUp = (email, password) => {
        this.setState({loading:true});
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                alert(JSON.stringify(user))
            }).catch((e) => {
                alert(e)
            }).finally(()=>{
                this.setState({loading:false});
            })
    };

    login = (email, password) => {
        this.setState({loading:true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                alert(JSON.stringify(user))
            }).catch((e) => {
                alert(e)
            }).finally(()=>{
                this.setState({loading:false});
            })
    };

    onLoginClick = ()=>{
        const emailText = this.emailInput.getText();
        const passText = this.emailInput.getText();
        if(emailText != null && emailText.length > 0 && passText != null && passText.length > 0){
            this.login(emailText,passText)
        }
    };

    onSignUpClick = ()=>{
        const emailText = this.emailInput.getText();
        const passText = this.emailInput.getText();
        if(emailText != null && emailText.length > 0 && passText != null && passText.length > 0){
            this.signUp(emailText,passText)
        }
    };

    logout = ()=>{
        firebase.auth().signOut();
    };

    getMyDataRef = ()=> firebase.database().ref().child("helloFromApp").child(Platform.select({ios:"iPhone",android:"AndroidPhone"}));

    saveToDb = ()=>{
        this.getMyDataRef().set("Hello world 2")
    };

    getValueFromDb = ()=>{
        this.getMyDataRef().once("value",(datasnap)=>{
            alert(JSON.stringify(datasnap.val()))
        });
    };

    getValueFromDbSocket = ()=>{
        this.getMyDataRef().on("value",(datasnap)=>{
            alert(JSON.stringify(datasnap.val()))
        });
    };




    getValueFromDbSocketAdd = ()=>{
        this.getMyDataRef().on("child_added",(datasnap)=>{
            alert(datasnap.val())
        });
    };

    pushData = ()=>{
        this.getMyDataRef().push().set("Hello")
    };

    removeData = ()=>{
        this.getMyDataRef().remove()
    };

    render() {
        const {emailText,loading} = this.state;
        //const {params} = this.props.navigation.state;
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <View style={{width: "80%"}}>
                    <Text style={{fontSize: 30, alignSelf: "center"}}>Login</Text>
                    <AppTextInput ref={(r)=>{this.emailInput=r}} placeholder={"Email"} />
                    <AppTextInput ref={(r)=>{this.passInput=r}} placeholder={"Password"} isPassword={true} />
                    <Button text={"Login"} onPress={this.onLoginClick} />
                    <Button text={"SignUp"} onPress={this.onSignUpClick} />
                    <Button text={"Logout"} onPress={this.logout} />
                    <Button text={"Save To Db"} onPress={this.saveToDb} />
                    <Button text={"get value from DB"} onPress={this.getValueFromDb} />
                    <Button text={"get value from DB socket"} onPress={this.getValueFromDbSocket} />
                    <Button text={"get value from DB socket add"} onPress={this.getValueFromDbSocketAdd} />
                    <Button text={"push Data"} onPress={this.pushData} />
                    <Button text={"Remove Data"} onPress={this.removeData} />
                </View>
                {loading && <LoadingView/>}
            </View>
        );
    }
}
