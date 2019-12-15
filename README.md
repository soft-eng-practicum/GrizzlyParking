# Grizzly Parking

An Ionic parking app that helps ease the flow of traffic on GGC's campus and helps students find available parking during school hours.

## Project Description

![grizzlyparkingpic](https://user-images.githubusercontent.com/31226756/39157415-c3365d72-4728-11e8-9228-36f311468cbb.png)

<ol>
    <li>Uses Google Firebase Authentication to register and verify users(@ggc.edu         addresses only)</li>
    <li>Uses Google Firebase Firestore as DB solution</li>
    <li>Uses Ionic-Native plugins to keep track of users(Geo fence, Geolocation)</li>

</ol>

## Quick Start

### Make sure the team composition is right
1. Your team will require at least one person to have a device with MacOS on it
2. The only way to test this app on iOS is with a machine that runs MacOS
3. Use a Project Management Tool to help keep track of progress. We used trello.com
### Make sure you are familiar with how Ionic 3 works
1. lynda.com offers some Ionic 2 courses which is very similar to Ionic 3.
2. Ionic 3 implements ```"Lazy Loading"``` which is a new way for Ionic to only load the neccessary .ts files when needed
3. Ionic 3 is written in ```Typescript``` and uses ```Angular``` as a framework for the front end
4. https://ionicframework.com/docs/

### Make sure you are familiar with noSQL and Firebase
1. This app utilizes Google's BaaS Firebase which handles ```AUTHENTICATION, DATABASE, FILE STORAGE``` and ```CLOUD FUNCTIONS```
2. We used ```AngularFire2``` (npm package) to allow the app to communicate with the ```Firebase SDK``` for ```WEB APPLICATIONS```
3. The ```Firebase Credentials``` for the application are located within ```src/app/config.ts``` this file holds all of the keys that associated with the Firebase Application
4. Google's Firebase Console is the main way to see everything that your app needs to run correctly
5. Firebase Docs - https://firebase.google.com/docs/
6. AngularFire2 Docs - https://github.com/angular/angularfire2/blob/master/docs/ionic/v3.md

### We recommend using Visual Studio Code
1. VS Code offers support for Ionic with third-party extensions
2. Ease of use
3. UI customization
4. Integrated Terminal ```ctrl + ` ```
    1. Git
    2. Ionic CLI
5. https://code.visualstudio.com/Download

## Code Base Explanation

### Adding a new page
1. Use Ionic's CLI to generate new pages
```
ionic -g page yourPageName
```
2. Since Ionic 3 uses ```"Lazy Loading"``` it will create a new folder with it's own ```module.ts```
3. In order for the application to recognize the new page, you must inject the exported class from your newly generated page into the ```app.module.ts``` under ```DEPENDENCIES``` and ```ENTRY COMPONENTS```

### Page Navigation
1. Ionic uses a ```STACK``` as a data structure for the ```UI```
2. ```Pushing``` a new page will place it on top of the current page; meaning that pressing back will go back to the previous page by ```popping``` current page.
```
this.navCtrl.push(YourPageClass);
```
### Using TypeScript variables within the HTML files
1. You can escape HTML and insert TypeScript code by using:
```
{{ yourTypeScriptVariableHere }}
```
```
Example:

<a href="#">{{ typeScriptVariable }}</a>
```

### Using FormBuilder
1. Ionic has a couple ways of using forms but we implemented the FormBuilder package because it allows for direct injection into constructor body.

```
.ts file

import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';

    //TS Variable
    public loginForm: FormGroup;

  constructor(
      public formBuilder: FormBuilder
  ){
      //Initialize Form
      this.loginForm = formBuilder.group({
        email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])]
      });
  }
```

```
HTML

<ion-header>
  <ion-navbar color="primary">
    <ion-title>Login</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>

    <ion-item>
      <ion-label stacked>Email</ion-label>
      <ion-input formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!loginForm.controls.email.valid && blur"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label stacked>Password</ion-label>
      <ion-input formControlName="password" type="password" placeholder="Your password" [class.invalid]="!loginForm.controls.password.valid && blur"></ion-input>
    </ion-item>

    <button ion-button block type="submit" [disabled]="!loginForm.valid">
      Login
    </button>

  </form>

  <button ion-button block clear (click)="goToSignup()">
    Create a new account
  </button>

  <button ion-button block clear (click)="goToResetPassword()">
    I forgot my password
  </button>

</ion-content>
```

### How Firebase connects with the app
1. ```src/app/config.ts``` holds all Firebase credentials
2. ```src/app/app.module.ts``` holds the code that initializes Firebase
```
app.module.ts

imports: [
    AngularFireModule.initializeApp(credentials.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule]
```
### Firebase Authentication
1. Import correct dependencies at the top of the TypeScript file <br>
```
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
```
2. Make sure you have injected a parameter within the constructor of the TypeScript file you are working on so that you can use Firebase
```
constructor(public afAuth : AngularFireAuth){
    this.variable = this.afAuth.getID }
```
3. The ```Login``` page of this application handles most of the logic for authenticating with Firebase but the ```Signup``` page handles the logic for creating a new user with email and password.

4. Since this application should only be used by GGC Students, the ```Signup``` page only accepts emails that end with ```@ggc.edu```. This is done by using a validator that is located in ```src/validators/email.ts```. This is a simple REGEX that only accepts ```@ggc.edu```.

//Todo
### Getting COLLECTIONS and DOCUMENTS from Firebase
//Todo
#### Firebase Observables
//Todo
#### Firebase Queries
//Todo
## Database Structure Explanation
//Todo
## Plugin Explanations
//Todo
## Running the app
### Installing Dependencies
```
npm i
```
1. If you look into the ```.gitignore``` file you will see that ```/platforms /plugins``` and ```/node_modules``` are excluded from the repository. That means that you need to install dependencies before building the project
2. ```npm i``` is a shorthand way of installing all dependencies that are listed in ```package.json``` (run this in the directory of project)

### Building the app
```
ionic cordova build android
ionic cordova build ios
```
1. Run the command that corresponds to the correct platform
2. If you get a build error then refer to troubleshooting portion of readme
### Serving the app
```
ionic serve
```
1. In the event of an app crash, serve the app to the browser for debugging purposes only
2. Since this app utilizes a lot of native functionalities, serving the application will not display the google maps plugin so it is recommended to test all changes on an actual device or an emulator
3. DO NOT assume that serving means the application is running correctly on native. You MUST run on your device to confirm that the application is running correctly.
### Running on Android
```
ionic cordova run android --device
```
1. Make sure device is plugged in
2. Make sure device is running Android 7.00 or higher
### Runnnig on iOS
```
ionic cordova build ios
```
1. Open xcode file in Platform/ios/GrizzliParking.xcodeproj
2. Sign Package with Developer Team. General/Signing - Select Team.
```
ionic cordova run ios --device
```
or
```
Click on the play button in xcode
```
## Deployment
Ideally the application should be deployed on the Google Play Store for Android and the App Store for iOS but if the application cannot pass the requirements that each market requires then you may use alternative methods to deploy the application.
### Android Deployment
1. Android APK's are easier to distribute and install than iOS because as long as the device has developer mode on and allows APK's from unknown sources
2. We used a Github Page to deploy our app at STaRS
3. https://grizzlyparking.github.io/ (May be an older APK)
```
ionic cordova build android
```
4. Run above command to build the APK for android located in the ```platforms/android/app/build/outputs/apk/debug/app-debug.apk```
### iOS Deployment
1. So far we are not able to deploy with Testflight thusly we must connect each iphone into the mac that is currently doing the xcode signing and deploying.
2. Once the app is build into the .xcodeproj file, all there is to do is click the play button in xcode and the app should be installed in the device
<img width="600" alt="grizzlygeneralpic" src="https://user-images.githubusercontent.com/31226756/39157431-d2c14e96-4728-11e8-8588-76277638e0b8.png">

## Troubleshooting

### Application does not run on device
1. Run ```ionic serve```
2. Either the page will show you the error or the console will
### Build Error Fix
1. Delete ```plugins www/ platforms```
2. Run ```npm i```
3. Build ```ionic cordova build <platform>```

### iOS Build Error
//Todo


## What was accomplished Spring 2018
1. Basic UI
2. Firebase Connection
<br>Authentication
<br>Firestore Database
<br>Firebase Functions Initialization
3. Geolocation Integration
4. Google Maps Integration
5. User Class Schedule Survey
6. Report Bugs Feature
7. Custom H-Lot Geo-fence
## Future Iterations
1. The rest of the campus parking lots
<br>Ordered by desirability
<br>A Lot(Highest Priority)
<br>L Lot
<br>I Lot(Lowest Priority)
2. Faculty Parking Application(Optional as it adds a lot of complexity)
<br>B Lot
<br>A Lot
3. Google Maps Overlay
4. Real Time Parking Overlay(Find My Parked Car!)
## Team Members Spring 2018
<ul>
    <li>Joshua Tran -
  <a href="https://github.com/jtran6">Github</a> |
  <a href="https://www.linkedin.com/in/joshua-tran-9700a8118/">LinkedIn</a>
    </li>
    <li>Luca Parilli -
    <a href="https://github.com/GianlucaParilli">Github</a> |
    <a href="https://www.linkedin.com/in/gianluca-parilli-608421151/">LinkedIn</a>
    </li>
    <li>Chelsea D'Alessandro
    </li>
</ul>

## Team Members Fall 2018
1. Jared Houseman
   1. *Team Manager*
   1. *Client Liaison*
   1. *Lead Programmer*

2. Paul Cardenas
   1. *UI Design*
   1. *Testing*     

3. Jacob Bradberry 😄
   1. *Data Modeler*
   1. *Documentation Lead*

--------------------------
--------------------------
# Parking Pirates
## Repo Location:
https://github.com/soft-eng-practicum/GrizzlyParking/tree/rnGrizzlyParking
## Progress Tracking Tool
- Discord
- Jira
## Team Members Fall 2019
1. **Nick Risley** - Team Manager, Client Liaison, Data Modeler :penguin:
2. **Joshua Walton** - Data Modeler :zap:
3. **Raghu Khanal** - Lead Programmer, Testing Lead :wolf:
4. **Mark Levengood** - Documentation lead, Programmer :computer:
5. **Travis Toal** - UI/UX design, Programmer :raised_hands:


## License for ParkingPirates
https://creativecommons.org/licenses/by-nc-sa/4.0/
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
</a><br />
<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Grizzly Parking</span> by <a xmlns:cc="http://creativecommons.org/ns#"
href="https://github.com/soft-eng-practicum/GrizzlyParking" property="cc:attributionName" rel="cc:attributionURL">Parking Pirates</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/soft-eng-practicum/GrizzlyParking" rel="dct:source">https://github.com/soft-eng-practicum/GrizzlyParking</a>.

## IP Agreement for ParkingPirates
https://drive.google.com/file/d/1R_85lmLhbZ7278b3c3JkV3T6hhzGbNIk/view?usp=sharing
## Common errors
For metro/ react-native start error go to:       
\node_modules\metro-config\src\defaults\blacklist.js

Change :
```$xslt

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

```
To:
```$xslt
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

```

********************************************************
For Gradle and/or KeyStore/Keytool errors:
```$xslt

rm -rf $GRADLE_HOME/caches/build-cache-*

keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

./gradlew cleanBuildCache

```
## Installations
Node, Python2, JDK 
```$xslt
choco install -y nodejs.install python2 jdk8

extra infos:
https://facebook.github.io/react-native/docs/getting-started
```

```$xslt
npm install
npm install -g react-native-cli
```

## Running React-Native on Android
```
react-native run-android
```
