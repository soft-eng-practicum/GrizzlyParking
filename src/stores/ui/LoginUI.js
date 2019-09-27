import { action, observable } from "mobx";

export class LoginUI {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    //#region Observables
    @observable username = "";

    @observable password = "";
    //#endregion

    //#region Functions
    @action setUsername(string) { this.username = string }
    @action setPassword(string) { this.password = string }
    //#endregion
}

const strings = {

};