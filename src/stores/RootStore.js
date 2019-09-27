import { createContext } from 'react';
import { LoginDomain } from './domain/LoginDomain';
import { LoginUI } from './ui/LoginUI';

export class RootStore {
    LoginUI = new LoginUI(this);
    LoginDomain = new LoginDomain(this);

    //#region Observables

    //#endregion
}

export const RootStoreContext = createContext(new RootStore());
