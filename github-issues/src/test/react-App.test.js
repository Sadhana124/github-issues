import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { TableDisplay } from '../components/TableDisplay';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<TableDisplay />)).toEqual(true);
});
