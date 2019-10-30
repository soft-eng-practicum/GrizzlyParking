import { observable, action } from "mobx";
import { Alert } from "react-native";

export class LoginDomain {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    login(navigation) {
        if (this.rootStore.LoginUI.username === "a"
            && this.rootStore.LoginUI.password === "a")
            navigation.navigate("Profile");
        else
            Alert.alert("Incorrect Login", "Please try again", [
                { text: "Ok", onPress: () => { } },
            ]);
    }

    @action
    createAccount(navigation) {
        navigation.navigate("CreateAccount");
    }

    @action
    forgotPassword(navigation) {
        navigation.navigate("ForgotPassword");
    }
    //#endregion

    // @action
    // createAccount(navigation) {
    //     navigation.navigate("Login");

    // }
}

const strings = {

};