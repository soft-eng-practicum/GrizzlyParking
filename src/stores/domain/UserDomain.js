import { observable } from "mobx";
import { persist } from "mobx-persist";

export class UserDomain {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @persist("object")
    @observable
    user
}