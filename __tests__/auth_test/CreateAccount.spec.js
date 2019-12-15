import React from 'react';
import {CreateAccount} from "../../src/authentication/CreateAccount";

import renderer from 'react-test-renderer';
import * as mocksdk from "firebase-mock";

MockFirebase.override();
test('renders correctly', () => {
    const create_account = new CreateAccount
    console.log(create_account)
});