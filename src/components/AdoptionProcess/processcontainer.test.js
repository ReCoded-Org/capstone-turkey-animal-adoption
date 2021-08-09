import React from 'react';
import renderer from 'react-test-renderer';
import ProcessContainer from './ProcessContainer.js';

it('renders correctly', () => {
  const tree = renderer
    .create(<ProcessContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});