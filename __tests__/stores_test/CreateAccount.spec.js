import React from 'react';
import {CreateAccountUI} from "../../src/stores/ui/CreateAccountUI";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<CreateAccountUI />).toJSON();
    expect(tree).toMatchSnapshot();
});