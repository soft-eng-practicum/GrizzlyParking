import {action, observable} from 'mobx';

export class CreateAccountUI {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  //#region Observables
  @observable email = '';

  @observable password = '';

  @observable confirmPassword = '';
  //#endregion

  //#region Functions
  @action setEmail(string) {
    this.email = string;
  }
  @action setPassword(string) {
    this.password = string;
  }
  @action setConfirmPassword(string) {
    this.confirmPassword = string;
  }
  //#endregion
}

const strings = {};
