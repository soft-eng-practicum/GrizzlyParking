import {action} from 'mobx';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export class AuthDomain {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  login(navigation) {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.rootStore.LoginUI.username,
        this.rootStore.LoginUI.password,
      )
      .then(user => {
        this.rootStore.UserDomain.user = user;
        this.rootStore.ParkingDomain.navigateToLanding(navigation);
      })
      .catch(error => {
        Alert.alert('Incorrect Login', 'Please try again', [
          {text: 'Ok', onPress: () => {}},
        ]);
      });
  }

  @action
  createAccount(navigation) {
    auth()
      .createUserWithEmailAndPassword(
        this.rootStore.CreateAccountUI.email,
        this.rootStore.CreateAccountUI.password,
      )
      .then(user => {
        this.rootStore.UserDomain.user = user;
        this.rootStore.ParkingDomain.navigateToLanding(navigation);
      })
      .catch(error => {
        Alert.alert('Error when your creating user', 'Please try again', [
          {text: 'Ok', onPress: () => {}},
        ]);
      });
  }

  @action
  forgotPassword(navigation) {
    auth()
      .sendPasswordResetEmail(this.rootStore.ForgotPasswordUI.email)
      .then(function(user) {
        Alert.alert(
          'Reset Password Sent',
          'Please check your email...',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.goBack();
              },
            },
          ],
          {cancelable: false},
        );
      })
      .catch(function(e) {
        console.log(e);
      });
  }

  @action
  navigateToCreateAccount(navigation) {
    navigation.navigate('CreateAccount');
  }

  @action
  navigateToForgotPassword(navigation) {
    navigation.navigate('ForgotPassword');
  }

  //#endregion

  // @action
  // createAccount(navigation) {
  //     navigation.navigate("Login");

  // }
}

const strings = {};
