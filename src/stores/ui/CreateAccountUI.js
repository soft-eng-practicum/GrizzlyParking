import { action, observable } from "mobx";

export class CreateAccountUI {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    //#region Observables
    @observable firstname = "";

    @observable lastname = "";

    @observable email = "";

    @observable phonenumber = "";

    @observable password = "";
    //#endregion

    //#region Functions
    @action setFirstName(string) { this.firstname = string }
    @action setLastName(string) { this.lastname = string }
    @action setEmail(string) { this.email = string }
    @action setPhoneNumber(string) { this.phonenumber = string }
    @action setPassword(string) { this.password = string }
    //#endregion
}

const strings = {

};