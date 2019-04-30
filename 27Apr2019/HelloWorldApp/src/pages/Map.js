import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker} from "react-native-maps";
import Button from "../components/Button";

export default class Map extends Component<Props> {
    static navigationOptions = ({navigation}) => ({
        title: "Map"
    });

    navigation;

    componentWillMount() {
        this.navigation = this.props.navigation;
    }


    render() {
        const {navigate} = this.navigation;

        return (
            <View style={{flex: 1}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{flex:1}}
                    initialRegion={{
                        longitudeDelta: 0.02628665417432785,
                        latitudeDelta: 0.02974382238674167,
                        longitude: -122.43970854207873,
                        latitude: 37.77979986502173 }}
                    onRegionChangeComplete={(region)=>{
                        console.log({region});
                    }}
                >
                 <Marker title={"UNI"} coordinate={{
                     longitude: -122.43970854207873,
                     latitude: 37.77979986502173 }}/>
                </MapView>
                <View style={{position:"absolute",bottom:0,width:"100%",backgroundColor:"rgba(255,255,255,0.7)",elevation:10}}>
                    <Button text={"Get Directions"} onPress={()=>{
                        Linking.openURL("http://maps.google.com/maps?saddr=20.344,34.34&daddr=20.5666,45.345")
                    }} />
                </View>
            </View>
        );
    }
}