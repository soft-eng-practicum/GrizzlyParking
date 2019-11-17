
import React from 'react';
import { observer } from 'mobx-react';
import {createAppContainer,} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack'
import { Login } from "../authentication/Login"
import { Landing } from "../authentication/Landing"
import { CreateAccount } from "../authentication/CreateAccount"
import { ForgotPassword } from "../authentication/ForgotPassword"
import { ProfilePage } from "../authentication/ProfilePage"

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
        Landing: { screen: Landing },
        CreateAccount: { screen: CreateAccount },
        ForgotPassword: { screen: ForgotPassword },
        ProfilePage: { screen: ProfilePage },
        
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    });

const AppContainer = createAppContainer(AppNavigator);