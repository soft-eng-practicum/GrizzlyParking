import { observer } from 'mobx-react';
import { Dimensions,ScrollView, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export const ForgotPassword = observer(
  ({ navigation, ...props }) => {
    const RootStore = React.useContext(RootStoreContext);


    return (


      <ScrollView>
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
              value={RootStore.ForgotPasswordUI.email}
              onChangeText={(text) => RootStore.ForgotPasswordUI.setEmail(text)}
              placeholder="Please enter your existing username." />
          </View>
        </View>
       

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonConfirm}
         onPress={() => RootStore.AuthDomain.forgotPassword(navigation)}
          >
          <Text style={styles.buttonText}>
            Confirm
          </Text>
        </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGoBack}
              onPress={() => RootStore.CreateAccountDomain.login(navigation)}>
              <Text style={styles.buttonText}>
                Go Back
              </Text>
            </TouchableOpacity>

          </View>
      </View>
      </ScrollView>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: "#056f4b",
    alignItems: 'center',

  },
  logo: {
    height: 50,
    resizeMode: "contain",
    marginTop: 14,
    alignSelf: 'center',

  },
  logoView: {
    alignItems: 'center',
    borderColor: '#0A5A45',
    backgroundColor: 'white',
    width: WIDTH - 80,
    height: 90,
    borderWidth: 5,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,

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
    alignItems: "center",
    marginVertical: 20,
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
    marginBottom: 10,

  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  buttonConfirm: {
    alignSelf: "center",
    height: 50,
    width: 150,
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255,0,0,0.6)',
    justifyContent: "center",

  },
  buttonGoBack: {
    alignSelf: "center",
    height: 50,
    width: 150,
    margin: 15,
    borderRadius: 15,
    backgroundColor: "#0A5A45",
    justifyContent: "center",

  },
  buttonText: {
    color: 'rgba(255,255,255,0.9)',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  });