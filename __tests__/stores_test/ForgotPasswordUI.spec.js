import React from 'react';
import {ForgotPasswordUI} from "../../src/stores/ui/ForgotPasswordUI";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<ForgotPasswordUI />).toJSON();
    expect(tree).toMatchSnapshot();
});