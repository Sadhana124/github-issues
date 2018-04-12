import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonDropdownFilter } from '../dropdown/ButtonDropdownFilter';
import { ButtonDropdownSort} from '../dropdown/ButtonDropdownSort';

const sortOptions = [
  {label: 'Newest', value:'created' },
  {label: 'Oldest', value:'created&direction=asc' },
  {label: 'Most commented', value:'comments' },
  {label: 'Least commented', value:'comments&direction=asc' },
  {label: 'Recently updated', value:'updated' },
  {label: 'Least recently updated', value:'updated&direction=asc' }
]

/*
The table header component, responsible for all header fields
*/

export class Header extends Component {

  constructor(props) {
    super(props)
    this.state={
      selectedAuthor:'',
      selectedLabels:'',
      sortKey: '',
    }
    this.dropDownMap = {};
  }

  render() {

    const {
      authorList,
      labelList,
      openCount,
      closedCount,
    } = this.props;

    return(
      <div className ="table-header">
      <span className="glyphicon glyphicon-exclamation-sign"></span>
      <span>{openCount} Open</span>
      <span className="glyphicon glyphicon-ok"></span>
      <span className="closed-text">{closedCount} Closed</span>
      <span className="pull-right">
      <ButtonDropdownFilter
        data={authorList}
        onFilter={this.onFilter}
        type='single'
        filterKey='creator'
        label="Author"
      />
      <ButtonDropdownFilter
        data={labelList}
        onFilter={this.onFilter}
        type='multi'
        filterKey='labels'
        label="Labels"
      />
      <ButtonDropdownFilter
        data={[]}
        label="Projects"
      />
      <ButtonDropdownFilter data={[]}
        label="Milestones"
      />
      <ButtonDropdownFilter data={[]}
        label="Assignee"
      />
      <ButtonDropdownSort 
        data={sortOptions}
        label="Sort"
        onFilter={this.onFilter}
        filterKey='sort'
      />
      </span>
      </div>
    );
  }


  onFilter = (filterKey, value) => {
    this.dropDownMap[filterKey] = value;
    
    // Create query string
    let queryString = '';
    for (const val in this.dropDownMap) {
      if (this.dropDownMap[val]) {
        queryString += (val + '=' + this.dropDownMap[val]) + '&';
      }
    }
    this.props.onFilter(queryString);
  }
}

Header.propTypes = {
  onFilter: PropTypes.func,
  authorList: PropTypes.array,
  labelList: PropTypes.array,
  openCount: PropTypes.number,
  closedCount: PropTypes.number,
}

Header.defaultProps = {
  authorList: [],
  labelList: [],
  openCount: 0,
  closedCount: 0,
}
