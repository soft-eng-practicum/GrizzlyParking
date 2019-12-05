import React from 'react';
import {ForgotPasswordUI} from "../../../src/stores/ui/ForgotPasswordUI";

import {LoginUI} from "../../../src/stores/ui/LoginUI";


test('Test Forgot Password UI', () => {
    const store = new ForgotPasswordUI();
    /*
    GIVEN: initialization of the ForgotPasswordUI
    THEN: email should be empty

    WHEN: We set the email
    THEN: we should expect it to match the case.
     */
    expect(store.email).toBe("");
    store.setEmail("someone@something.com");

    expect(store.email).toBe("someone@something.com");
});