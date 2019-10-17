import { observer } from 'mobx-react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';


export const CreateAccount = observer(
  ({ navigation, ...props }) => {
    const RootStore = React.useContext(RootStoreContext);


    return (
        <View style={StyleSheet.main}>
                <Image style={styles.logo}
                    source={require("../../lib/images/ggc-logo.png")} />

                <Text style={styles.sectionTitle}>
                  Create Account
                </Text>
                  <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>
                        First Name
                      </Text>
                      <TextInput style={styles.input}
                      style={{height: 40}}
                      placeholder="E.g. John"
                      >

                      </TextInput>

                      <Text style={styles.sectionTitle}>
                        Last Name
                      </Text>
                      <TextInput style={styles.input}
                      style={{height: 40}}
                      placeholder="E.g. Smith"
                      >
                        
                      </TextInput>

                      <Text style={styles.sectionTitle}>
                        Email Address
                      </Text>
                      <TextInput style={styles.input}
                      style={{height: 40}}
                      placeholder="Please enter your GGC email."
                      >
                        
                      </TextInput>

                      <Text style={styles.sectionTitle}>
                        Phone Number
                      </Text>
                      <TextInput style={styles.input}
                      style={{height: 40}}
                      placeholder="E.g. (770)...-...."
                      >
                        
                      </TextInput>

                      <Text style={styles.sectionTitle}>
                        Password
                      </Text>
                      <TextInput style={styles.input}
                      secureTextEntry={true}
                      style={{height: 40}}
                      placeholder="Enter new password"
                      >
                        
                      </TextInput>

                    </View>
                  </View>
                  <TouchableOpacity style={styles.button}
                    onPress={() => RootStore.CreateAccountDomain.login(navigation)}>
                    <Text style={styles.buttonText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
        </View>
        );
    }
);

      
    
  



const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#DADADA",
  },
  logo: {
    height: 50,
    resizeMode: "contain",
    marginTop: 24,
    justifyContent: "center",
  },

  body: {
    backgroundColor: "#FFFFFF"
  },
sectionContainer: {
  marginTop: 32,
  paddingHorizontal: 24,
},
sectionTitle: {
  fontSize: 18,
  fontWeight: '600',
  color: "#000000",
},
input: {
  height: 50,
  width: 350,
  paddingLeft: 12,
  fontSize: 16,
  backgroundColor: "#FFFFFF",
  borderColor: "#0A5A45",
  borderWidth: 1,
},
button: {
    height: 50,
    width: 150,
    marginTop: 24,
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


//return {
    //<View style=({ flex: 1, justifyContent: })
//}

//const App: () => React$Node = () => {
    
  //};
{/* <View>
    <Text>Name: </Text>
    <Text>Email: </Text>
    <Text>Phone Number: </Text>
    <Text>Password: </Text>
</View> */}

