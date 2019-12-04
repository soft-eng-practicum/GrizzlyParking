import React from 'react';
import {LoginUI} from "../../src/stores/ui/LoginUI";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<LoginUI />).toJSON();
    expect(tree).toMatchSnapshot();
});