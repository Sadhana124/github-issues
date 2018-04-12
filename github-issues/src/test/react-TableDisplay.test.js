import React from 'react';
import { shallow } from 'enzyme';
import { TableDisplay } from '../components/TableDisplay';
import { Header } from '../components/table-header/Header';
import { RowData } from '../components/row-data/RowData'

it('renders Header and Row in Table', () => {
  const wrapper = shallow(<TableDisplay />);
  expect(wrapper).toMatchSnapshot();  
});
