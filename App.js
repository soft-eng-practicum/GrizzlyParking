/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { AppLauncher } from './src/app/AppLauncher';


const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#323232" barStyle="light-content" />
      <AppLauncher />
    </Fragment>
  );
};

export default App;
