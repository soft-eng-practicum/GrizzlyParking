import React from 'react';
import {CreateAccountUI} from "../../../src/stores/ui/CreateAccountUI";

import renderer from 'react-test-renderer';
import {LoginUI} from "../../../src/stores/ui/LoginUI";


test('Test CreateAccount UI', () => {
    const store = new CreateAccountUI();
    /*
    GIVEN: initialization of the LoginUI
    THEN: username should be empty
    THEN: password should be empty

    WHEN: We set the username and password
    THEN: we should expect it to match the case.
     */
    expect(store.email).toBe("");
    expect(store.password).toBe("");
    expect(store.confirmPassword).toBe("");

    store.setEmail("username");
    store.setPassword("password");
    store.setConfirmPassword("password");

    expect(store.email).toBe("username");
    expect(store.password).toBe("password");
    expect(store.confirmPassword).toBe("password");
});