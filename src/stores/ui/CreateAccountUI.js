import { action, observable } from "mobx";

export class CreateAccountUI {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    //#region Observables
    @observable email = "";

    @observable confirmEmail = "";

    @observable password = "";
    //#endregion

    //#region Functions
    @action setEmail(string) { this.email = string }
    @action setConfirmEmail(string) { this.confirmEmail = string }
    @action setPassword(string) { this.password = string }
    //#endregion
}

const strings = {

};