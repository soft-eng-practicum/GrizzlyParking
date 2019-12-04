import React from 'react';
import {UserDomain} from "../../src/stores/domain/UserDomain";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<UserDomain />).toJSON();
    expect(tree).toMatchSnapshot();
});