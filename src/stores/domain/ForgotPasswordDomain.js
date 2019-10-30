import { observable, action } from "mobx";
import { Alert } from "react-native";

export class ForgotPasswordDomain {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }


    @action
    login(navigation) {
        navigation.navigate("Login");
    }
}

const strings = {

};