import React from 'react';
import {Landing} from "../../src/authentication/Landing";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<Landing />).toJSON();
    expect(tree).toMatchSnapshot();
});