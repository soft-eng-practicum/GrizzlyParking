import { createContext } from 'react';
import { LoginDomain } from './domain/LoginDomain';
import { LoginUI } from './ui/LoginUI';
import { SignupDomain } from './domain/SignupDomain';
import { SignupUI } from './ui/SignupUI';

export class RootStore {
    LoginUI = new LoginUI(this);
    LoginDomain = new LoginDomain(this);
    SignupUI = new SignupUI(this);
    SignupDomain = new SignupDomain(this);

    //#region Observables

    //#endregion
}

export const RootStoreContext = createContext(new RootStore());
