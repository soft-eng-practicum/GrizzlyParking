import React from 'react';
import {AuthDomain} from "../../src/stores/domain/AuthDomain";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<AuthDomain />).toJSON();
    expect(tree).toMatchSnapshot();
});