import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {
  UserInterface,
  SurveyTimeInterface,
  ReportBugInterface
} from "../../shared/models/collections";


const timestamp = firebase.firestore.FieldValue.serverTimestamp();

/*const firestore = firebase.firestore();
const settings = {/* your settings... */ /*timestampsInSnapshots: true };
firestore.settings(settings);*/

@Injectable()
export class AuthProvider {
  userCollectionRef: AngularFirestoreCollection<UserInterface>;

  constructor(
    public afs: AngularFirestore
  ) {
    this.userCollectionRef = this.afs.collection('user');
  }

  //logging user in
  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  //creating new user
  signupUser(email: string, password: string): Promise<any> {
    this.userCollectionRef.add({
      isParked: false,
      parkedLocation: firebase.firestore().collection('/location').doc('h-lot'),
      parkedLot: firebase.firestore().collection('/parkingLot').doc('none'),
      parkedTime: timestamp,
      email: email
    })
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // .then( newUser => {
    //   firebase
    //   .database()
    //   .ref('/userProfile')
    //   .child(newUser.uid)
    //   .set({ email: email });
    // });
  }

  //resetting password
  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  //logging user out
  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }
}
