import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../App';

// API Test
//jest.mock('./__mocks__/axios');
const github = require('../api/github');
it('should load org repos ', async () => {
  const data = await github.getRepo('HelloFax');
  expect(data).toBeDefined();
  expect(data.length).toEqual(18);
});

// DOM Tests
it('renders without crashing', () => {
  shallow(<App />);
});

it('has a table', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.table')).toHaveLength(1);
});

it('should find the Modal element', () => {
  const modal = shallow(<App />).find('Modal');
  expect(modal).toHaveLength(1); // passes
});
