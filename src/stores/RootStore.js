import {createContext} from 'react';
import {LoginUI} from './ui/LoginUI';
import {AuthDomain} from './domain/AuthDomain';
import {UserDomain} from './domain/UserDomain';
import {CreateAccountUI} from './ui/CreateAccountUI';
import {ForgotPasswordUI} from './ui/ForgotPasswordUI';
import {ParkingDomain} from './domain/ParkingDomain';

export class RootStore {
  LoginUI = new LoginUI(this);
  AuthDomain = new AuthDomain(this);
  CreateAccountUI = new CreateAccountUI(this);
  ForgotPasswordUI = new ForgotPasswordUI(this);
  UserDomain = new UserDomain(this);
  ParkingDomain = new ParkingDomain(this);
}

export const RootStoreContext = createContext(new RootStore());
