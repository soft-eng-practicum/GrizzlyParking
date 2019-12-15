import React from 'react';
import {LoginUI} from "../../../src/stores/ui/LoginUI";


test('Test Login UI', () => {
    const store = new LoginUI;
    /*
    GIVEN: initialization of the LoginUI
    THEN: username should be empty
    THEN: password should be empty

    WHEN: We set the username and password
    THEN: we should expect it to match the case.
     */
    expect(store.username).toBe("");
    expect(store.password).toBe("");
    store.setUsername("username");
    store.setPassword("password");

    expect(store.username).toBe("username");
    expect(store.password).toBe("password");
});