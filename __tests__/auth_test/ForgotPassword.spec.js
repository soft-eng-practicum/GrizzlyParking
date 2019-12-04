import React from 'react';
import {ForgotPassword} from "../../src/authentication/ForgotPassword";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
});