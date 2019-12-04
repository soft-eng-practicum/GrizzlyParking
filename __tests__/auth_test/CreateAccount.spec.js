import React from 'react';
import {CreateAccount} from "../../src/authentication/CreateAccount";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<CreateAccount />).toJSON();
    expect(tree).toMatchSnapshot();
});