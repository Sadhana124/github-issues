import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/table-header/Header';
import { ButtonDropdownFilter } from '../components/dropdown/ButtonDropdownFilter';

it('renders header with correct propps', () => {
  const wrapper = shallow(
      <Header 
        authorList={['author1', 'author2']}
        labelList={['medium', 'question']}
        openCount={10}
        closedCount={20}
      />
  );
  expect(wrapper.instance().props.openCount).toEqual(10);
});

it('renders header with correct number of dropdowns', () => {
  const wrapper = shallow(
      <Header />
  );
  expect(wrapper.find(ButtonDropdownFilter)).toHaveLength(5);
});
