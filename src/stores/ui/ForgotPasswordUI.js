import {action, observable} from 'mobx';

export class ForgotPasswordUI {
  rootStore;
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  //#region Observables
  @observable email = '';
  //#endregion

  //#region Functions
  @action setEmail(string) {
    this.email = string;
  }
  //#endregion
}
