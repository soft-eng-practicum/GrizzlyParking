
import React from 'react';
import { observer } from 'mobx-react';
import {createAppContainer,} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack'
import { Login } from "../authentication/Login"
import { Profile } from "../authentication/Profile"
import { CreateAccount } from "../authentication/CreateAccount"

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
        Profile: { screen: Profile },
        CreateAccount: { screen: CreateAccount }
    },
    {
        initialRouteName: "CreateAccount",
        headerMode: "none"
    });

const AppContainer = createAppContainer(AppNavigator);