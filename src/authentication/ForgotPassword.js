import { observer } from 'mobx-react';
import { Dimensions, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export const ForgotPassword = observer(
  ({ navigation, ...props }) => {
    const RootStore = React.useContext(RootStoreContext);


    return (


      <View style={styles.background}>
        <View style={styles.logoView}>
          <Image style={styles.logo}
            source={require("../../lib/images/ggc-logo.png")} />
        </View>




        <View style={styles.body}>



          <Text style={styles.sectionTitle}>
            Forgot Password?
                </Text>
          <View style={styles.sectionContainer}>

            <Text style={styles.sectionHeader}>
              Username
                      </Text>
            <TextInput style={styles.input}
              
              placeholder="Please enter your existing username."
            >

            </TextInput>

            <Text style={styles.sectionHeader}>
              Old Password:
                      </Text>
            <TextInput style={styles.input}
              secureTextEntry={true}
              
              placeholder="Enter your old password:"
            >

            </TextInput>

            <Text style={styles.sectionHeader}>
              New Password:
                      </Text>
            <TextInput style={styles.input}
              secureTextEntry={true}
              
              placeholder="Enter your new password:"
            >

            </TextInput>

          </View>
        </View>
        <TouchableOpacity style={styles.button}
          onPress={() => RootStore.CreateAccountDomain.login(navigation)}>
          <Text style={styles.buttonText}>
            Done
                    </Text>
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      height: HEIGHT,
      width: WIDTH,
      backgroundColor: "#FFFFFF",
  
    },
    logo: {
      height: 50,
      resizeMode: "contain",
      marginTop: 14,
      alignSelf: 'center',
    },
    logoView: {
      borderRadius: 30,
      borderColor: '#0A5A45',
      borderWidth: 5,
      backgroundColor: 'white',
      marginTop: 20,
      marginBottom: 20,
      width: WIDTH - 80,
      height: 90,
    },
  
    body: {
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
      width: WIDTH - 30,
      borderRadius: 30,
      borderColor: '#0A5A45',
      borderWidth: 5,
    },
    sectionContainer: {
      marginTop: 20,
      paddingHorizontal: 24,
   
  
    },
  
    sectionHeader: {
      fontSize: 22,
      fontWeight: '600',
      color: "#000000",
      
  
    },
    sectionTitle: {
      fontSize: 30,
      fontWeight: '700',
      color: "#000000",
      textAlign: 'center',
      marginTop: 10,
     
  
    },
    input: {
      height: 45,
      width: WIDTH - 85,
      padding: 15,
      fontSize: 15,
      borderColor: '#0A5A45',
      borderWidth: 2,
      borderRadius: 15,
      marginBottom:10,
      
      
    },
    button: {
      height: 50,
      width: 150,
      marginTop: 15,
      borderRadius: 15,
      backgroundColor: "#0A5A45",
      justifyContent: "center",
    },
    buttonText: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
    },
  });