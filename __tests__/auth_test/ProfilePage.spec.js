import React from 'react';
import {ProfilePage} from "../../src/authentication/ProfilePage";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<ProfilePage />).toJSON();
    expect(tree).toMatchSnapshot();
});