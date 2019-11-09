
import { Image, ScrollView, Dimensions, StyleSheet, Text, TextInput, View, Keyboard, KeyboardAvoidingView } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { RootStoreContext } from '../stores/RootStore';
import BackGroundImage from '../../lib/images/logo2A.png';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')


export const Login = observer(
    ({ navigation, ...props }) => {

        useEffect(() => {
            RootStore.ParkingDomain.setListenerForLastCheckin();
            return () => {
                RootStore.LoginUI.setUsername("");
                RootStore.LoginUI.setPassword("");
            }
        }, []);

        const RootStore = React.useContext(RootStoreContext);
        passwordRef = null;

        return (
            <ScrollView style={styles.background} behavior="padding">
                <Image source={BackGroundImage} style={styles.backgroundImage} />

                    <View>
                        <Text style={styles.logoText}>Grizzly Parking</Text>
                    </View>

                    {this.RootStore != null && this.RootStore.UserDomain != null && this.RootStore.UserDomain.user != null &&
                        <KeyboardAvoidingView style={styles.button} behavior="padding">
                            <TouchableOpacity style={styles.buttonLogin}
                                onPress={() => RootStore.ParkingDomain.navigateToLanding(navigation)}>
                                <Text style={styles.loginText}>Welcome back {this.RootStore.UserDomain.user.user._user.email}</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>}

                   {(this.RootStore == null || this.RootStore.UserDomain == null || this.RootStore.UserDomain.user == null) &&
                    <View style={styles.inputWrapper}>
                        <Icon name={'md-person'} size={28}
                            style={styles.inputIconUser} />

                        <TextInput style={styles.inputBoxs}
                            placeholder={'Username'}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            value={RootStore.LoginUI.username}
                            keyboardType="email-address"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.focus()}
                            onChangeText={(text) => RootStore.LoginUI.setUsername(text)}
                             />
                    </View>}

                    {(this.RootStore == null || this.RootStore.UserDomain == null || this.RootStore.UserDomain.user == null) &&
                    <View style={styles.inputWrapper}>

                        <Icon name={'ios-lock'} size={28}
                            style={styles.inputIconPass} />

                        <TextInput ref={(ref) => passwordRef = ref}
                            style={styles.inputBoxs}
                            placeholder={'Password'}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            secureTextEntry={true}
                            value={RootStore.LoginUI.password}
                            returnKeyType="go"
                            onSubmitEditing={() => RootStore.AuthDomain.login(navigation)}
                            onChangeText={(text) => RootStore.LoginUI.setPassword(text)} />
                    </View>}

                    {(this.RootStore == null || this.RootStore.UserDomain == null || this.RootStore.UserDomain.user == null) &&
                        <KeyboardAvoidingView style={styles.button} behavior="padding">
                            <TouchableOpacity style={styles.buttonLogin}
                                onPress={() => RootStore.AuthDomain.login(navigation)}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>}

                    {(this.RootStore == null || this.RootStore.UserDomain == null || this.RootStore.UserDomain.user == null) &&
                        <KeyboardAvoidingView style={styles.button} behavior="padding">
                            <TouchableOpacity style={styles.buttonRegister}
                                onPress={() => RootStore.AuthDomain.navigateToCreateAccount(navigation)}>
                                <Text style={styles.registerText}>Create Account</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>}

                    {(this.RootStore == null || this.RootStore.UserDomain == null || this.RootStore.UserDomain.user == null) &&
                        <KeyboardAvoidingView style={styles.button} behavior="padding">
                            <TouchableOpacity style={styles.buttonForgotPassword}
                                onPress={() => RootStore.AuthDomain.navigateToForgotPassword(navigation)}>
                                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>}
            </ScrollView>
        );
    }
);

const styles = StyleSheet.create({

    background: {
        backgroundColor: '#056f4b',
        height: HEIGHT,
        width: WIDTH,
    },

    backgroundImage: {
        alignSelf: 'center',
        alignItems: 'center',
        width: 280,
        height: 280,
        marginTop: 24,
        paddingTop: 350,
        resizeMode: 'contain'
    },

    logoText: {
        color: 'white',
        fontWeight: '700',
        textAlign: "center",
        fontSize: 40,
        opacity: 0.8,
        marginTop: 10,
        paddingBottom: 25
    },

    button: {
        alignItems: "center"
    },

    loginText: {
        color: 'rgba(255,255,255,0.7)',
        backgroundColor: 'rgba(255,0,0,0.6)',
        textAlign: 'center',
        fontSize: 30,
        width: WIDTH - 250,
        height: 50,
        borderRadius: 15,
        paddingTop: 2,
        marginBottom: 5,
    },

    registerText: {
        color: 'rgba(255,255,255,0.7)',
        backgroundColor: 'rgba(0,0,180,0.35)',
        textAlign: 'center',
        fontSize: 15,
        width: WIDTH - 255,
        height: 22,
        borderRadius: 15,
        margin: 5,
    },

    forgotPasswordText: {
        color: 'rgba(255,255,255,0.8)',
        backgroundColor: 'rgb(180,160,0)',
        textAlign: 'center',
        fontSize: 15,
        width: WIDTH - 235,
        height: 22,
        borderRadius: 15,
        margin: 10,

    },

    inputBoxs: {
        backgroundColor: 'rgba(255,255,255,0.35)',
        width: WIDTH - 80,
        height: 45,
        fontSize: 23,
        borderRadius: 25,
        paddingLeft: 50,
        paddingBottom: 9,
    },

    inputWrapper: {
        alignItems: 'center',
        marginBottom: 10,
    },

    inputIconUser: {
        position: 'absolute',
        color: 'rgba(255,255,255,0.5)',
        top: 7,
        left: 12
    },
    inputIconPass: {
        position: 'absolute',
        color: 'rgba(255,255,255,0.5)',
        top: 7,
        left: 15
    },

    buttonEye: {
        position: 'absolute',
        top: 9,
        right: 12
    },

    buttonLogin: {
        top: 10,
    },
    buttonRegister: {
        top: 15,
    },
    buttonForgotPassword: {
        top: 10,
    },
});