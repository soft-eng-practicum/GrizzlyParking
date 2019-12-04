import React from 'react';
import {ParkingDomain} from "../../src/stores/domain/ParkingDomain";

import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<ParkingDomain />).toJSON();
    expect(tree).toMatchSnapshot();
});