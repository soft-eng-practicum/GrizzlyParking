import { observable, action } from "mobx";
import { Alert } from "react-native";

export class LoginDomain {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    login(navigation) {
        if (this.rootStore.LoginUI.username === "parkingpirates"
            && this.rootStore.LoginUI.password === "softwaredevelopment2")
            navigation.navigate("Profile");
        else
            Alert.alert("Incorrect Login", "Please try again", [
                { text: "Ok", onPress: () => { } },
            ]);
    }
    //#endregion
}

const strings = {

};