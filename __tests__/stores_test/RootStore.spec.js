import React from 'react';
import {RootStore} from "../../src/stores/RootStore";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<RootStore />).toJSON();
    expect(tree).toMatchSnapshot();
});