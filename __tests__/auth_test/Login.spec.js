import React from 'react';
import {Login} from "../../src/authentication/Login";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});