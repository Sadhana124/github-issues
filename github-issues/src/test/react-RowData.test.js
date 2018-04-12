import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RowData } from '../components/row-data/RowData';


it('renders row with correct class', () => {
  const wrapper = shallow(<RowData />);
  expect(wrapper.find('.row-data')).toHaveLength(1);
});

it('does not render comments section if prop not passed', () => {
  const wrapper = shallow(<RowData />);
  expect(wrapper.find('.row-data').find('.glyphicon-comment')).toHaveLength(0);
});

it('renders comments section if prop passed', () => {
  const wrapper = shallow(<RowData comments={10}/>);
  expect(wrapper.find('.row-data').find('.glyphicon-comment')).toHaveLength(1);
});
