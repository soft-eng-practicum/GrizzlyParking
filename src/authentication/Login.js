
import { Image, Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { RootStoreContext } from '../stores/RootStore';
import BackGroundImage from '../../lib/images/logo2A.png'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons'
import { firebase } from '@react-native-firebase/auth';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

// constructor(){
//     super()
//     this.state = { showPass: true, press: false }
// }


function App() {


    // Set an initilizing state whilst Firebase connects
    const [initilizing, setInitilizing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initilizing) setInitilizing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initilizing) return null;

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user.email}</Text>
        </View>
    );
}


export const Login = observer(
    ({ navigation, ...props }) => {

        this.state = { showPass: true, press: false }

        showpass = () => {
            if (this.state.press == false) {
                this.setState({ showPass: false, press: true })
            }
            else {
                this.setState({ showPass: true, press: false })
            }
        }

        const RootStore = React.useContext(RootStoreContext);


        return (

            <View style={styles.background}>
                <ImageBackground source={BackGroundImage} style={styles.backgroundImage}>

                    <View>
                        <Text style={styles.logoText}>Grizzly Parking</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Icon name={'md-person'} size={28}
                            style={styles.inputIconUser} />

                        <TextInput style={styles.inputBoxs}
                            placeholder={'Username'}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            value={RootStore.LoginUI.username}
                            onChangeText={(text) => RootStore.LoginUI.setUsername(text)} />
                    </View>

                    <View style={styles.inputWrapper}>

                        <Icon name={'ios-lock'} size={28}
                            style={styles.inputIconPass} />

                        <TextInput style={styles.inputBoxs}
                            placeholder={'Password'}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            //secureTextEntry={this.state.showPass}
                            secureTextEntry={true}
                            value={RootStore.LoginUI.password}
                            onChangeText={(text) => RootStore.LoginUI.setPassword(text)} />

                        {/* <TouchableOpacity style={styles.buttonEye}
                            onPress={this.showpass.bind(this)}>
                            <Icon name={this.state.press == false ? 'ios-eye-off' : 'ios-eye'}
                                color={'rgba(255,255,255,0.7)'} size={25} />
                        </TouchableOpacity> */}
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonLogin}
                            onPress={() => RootStore.LoginDomain.login(navigation)}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonRegister}
                            onPress={() => RootStore.LoginDomain.createAccount(navigation)}>
                            <Text style={styles.registerText}>Create Account</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonForgotPassword}
                            onPress={() => RootStore.LoginDomain.forgotPassword(navigation)}>
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </View>
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
        flex: 1,
        width: 320,
        height: 320,
        marginTop: 30,
        paddingTop: 350,
    },

    logoText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 40,
        opacity: 0.8,
        marginTop: 10,
        paddingBottom: 25
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