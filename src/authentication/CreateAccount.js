import { observer } from 'mobx-react';
import { Dimensions, KeyboardAvoidingView, ScrollView, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export const CreateAccount = observer(
  ({ navigation, ...props }) => {
    const RootStore = React.useContext(RootStoreContext);

    useEffect(() => {
      return () => {
        RootStore.CreateAccountUI.setEmail("");
        RootStore.CreateAccountUI.setPassword("");
        RootStore.CreateAccountUI.setConfirmPassword("");
      }
    }, [])


    return (


      <ScrollView style={styles.background}>
        <View style={styles.logoView}>
          <Image style={styles.logo}
            source={require("../../lib/images/ggc-logo.png")} />
        </View>




        <View style={styles.body}>



          <Text style={styles.sectionTitle}>
            Create Account
                </Text>
          <KeyboardAvoidingView style={styles.sectionContainer} behavior="padding">

            <Text style={styles.sectionHeader}>
              Email Address
                      </Text>
            <TextInput style={styles.input}
              value={RootStore.CreateAccountUI.email}
              onChangeText={(text) => RootStore.CreateAccountUI.setEmail(text)}
              placeholder="Please enter your GGC email." />

            <Text style={styles.sectionHeader}>
              Password
            </Text>
            <TextInput style={styles.input}
              value={RootStore.CreateAccountUI.password}
              secureTextEntry={true}
              placeholder="Enter new password..."
              onChangeText={(text) => RootStore.CreateAccountUI.setPassword(text)} />

            <Text style={styles.sectionHeader}>
              Confirm Password
                      </Text>
            <TextInput style={styles.input}
              value={RootStore.CreateAccountUI.confirmPassword}
              secureTextEntry={true}
              onChangeText={(text) => RootStore.CreateAccountUI.setConfirmPassword(text)}
              placeholder="Confirm your email." />

          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}
          onPress={() => RootStore.AuthDomain.createAccount(navigation)}>
          <Text style={styles.buttonText}>
            Confirm
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
);






const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: "#056f4b",

  },
  logo: {
    height: 50,
    resizeMode: "contain",
    marginTop: 14,
    alignSelf: 'center',
  },
  logoView: {
    alignSelf: "center",
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
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: WIDTH - 30,
    borderRadius: 30,
    borderColor: '#0A5A45',
    borderWidth: 5,
  },
  sectionContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 24,
 

  },

  sectionHeader: {
    alignItems: "center",
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
    alignSelf: "center",
    height: 50,
    width: 150,
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255,0,0,0.6)',
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

