import { action, observable } from "mobx";

export class ForgotPasswordUI {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    //#region Observables
    @observable email = "";

    @observable oldPassword = "";

    @observable newPassword = "";
    //#endregion

    //#region Functions
    @action setEmail(string) { this.email = string }
    @action setOldPassword(string) { this.oldPassword = string }
    @action setNewPassword(string) { this.newPassword = string }
    //#endregion
}

const strings = {

};