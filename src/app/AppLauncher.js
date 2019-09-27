import { observer } from 'mobx-react';
import React from 'react';
import {
    createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator,
} from 'react-navigation-stack'
import { Login } from "../authentication/Login"
import { Profile } from "../authentication/Profile"

export const AppLauncher = observer(
    ({
        navigation,
        ...props
    }) => {
        return (
            <AppContainer />
        );
    }
);

/**
 * The main stack navigator for the Order Manager.
 * 
 * @constant
 */
const AppNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        Profile: { screen: Profile }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    });

const AppContainer = createAppContainer(AppNavigator);