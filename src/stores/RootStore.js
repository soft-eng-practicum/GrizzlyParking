import { createContext } from 'react';
import { LoginDomain } from './domain/LoginDomain';
import { LoginUI } from './ui/LoginUI';
import { CreateAccountDomain } from './domain/CreateAccountDomain';
import { CreateAccountUI } from './ui/SignupUI';

export class RootStore {
    LoginUI = new LoginUI(this);
    LoginDomain = new LoginDomain(this);
    CreateAccountUI = new CreateAccountUI(this);
    CreateAccountDomain = new CreateAccountDomain(this);

    //#region Observables

    //#endregion
}

export const RootStoreContext = createContext(new RootStore());
