import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";
import {routes} from "./Routes";
import {Colors} from "../base/Styles";
import DrawerView from "../components/DrawerView";

const MainStack = createStackNavigator(routes, {
    //To set default page for navigator
    //initialRouteName:"Login",
    defaultNavigationOptions: () => {
        return {
            title: "Default Title",
            headerStyle: {
                backgroundColor: Colors.primary,
                paddingTop:Platform.select({
                    ios:0,
                    android:20
                }),
                height:Platform.select({
                    ios:50,
                    android:70
                })
            },
            headerTintColor: "#fff"
        };


    }
});

const drawerNav = createDrawerNavigator({
    MainApp: {screen: MainStack}
}, {
    contentComponent: ({navigation}) => (
        <DrawerView navigation={navigation}/>
    )
});

export const AppNavigation = createAppContainer(drawerNav);