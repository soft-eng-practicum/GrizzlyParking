import React from 'react';
// import Intro from "../src/Intro";
import  {RootStore} from "../src/stores/RootStore";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom'


test('renders correctly', () => {
  const store = new RootStore()
  const loginui = store.LoginUI()
  console.log(loginui)
  expect(1+1).toBe(4)
});