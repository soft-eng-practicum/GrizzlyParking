import React from 'react';
import {AuthDomain} from "../../src/stores/domain/AuthDomain";
import {CreateAccountUI} from "../../src/stores/ui/CreateAccountUI";

test('Test Forgot Password UI', () => {
    let rootStore = {
        LoginUI:{
            username: "username",
            password: "password"
        },
        UserDomain:{
            user: ""
        },
        ParkinDomain:{
            navigateToLanding:function(navigation){

            }
        }
    };
    let navigation = "mock_navigation";
    const store = new AuthDomain(rootStore);

    store.login(navigation)
});