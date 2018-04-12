import React, { Component } from 'react';
import $ from 'jquery';
import { concat, uniq } from 'lodash';

import { makeAuthorList, makeLabelList, getOpen, getClosed, getDate } from '../util';
import { Header } from './table-header/Header';
import { RowData } from './row-data/RowData';

/*
The table (HOC) component, that contains rows and header
It is also responsible for data fetch
*/

export class TableDisplay extends Component {
  
  constructor() {
    super();

    this.state = {
      data: [],
      selectedFilter: '',
      authorList: [],
      labelList: [],
    }

    this.open = 0;
    this.closed = 0;
  }

  onFilter = (queryString) => {
    let url = 'https://api.github.com/repos/react-bootstrap/react-bootstrap/issues?';

    url += queryString;

    $.ajax({url: url, success: (result) => {
      this.setState({data: result});
      
      const combinedAuthors = uniq(concat(makeAuthorList(result), this.state.authorList));
      const combinedLabels = uniq(concat(makeLabelList(result), this.state.labelList));

      this.setState({
        authorList: combinedAuthors,
        labelList: combinedLabels
      });

    }});

  }

  componentWillMount() {
    $.ajax({url: 'https://api.github.com/repos/react-bootstrap/react-bootstrap/issues', success: (result) => {
      this.setState({data: result},
      () => {
        const {
          data
        } = this.state;
        this.setState({
          labelList: makeLabelList(data),
          authorList: makeAuthorList(data),
        });
        this.open = getOpen(data);
        this.closed = getClosed(data);
      });
    }});
  }

  render() {
    const {
      data
    } = this.state;
    if (this.open === 0) {this.open = getOpen(data)};
    if (this.closed === 0) {this.closed = getClosed(data)};

    const ele = this.state.data.map((val) =>
      <RowData
        key={val.number}
        title={val.title}
        number={val.number}
        reporter={val.user.login}
        assignee={val.assignee? val.assignee: null}
        labels={val.labels}
        url={val.html_url}
        date={getDate(val.created_at)}
        status={val.state}
        comments={val.comments}
      />);

    return(
      <div className="git-issues-table">
        <Header
          //data={this.state.data}
          onFilter={this.onFilter}
          authorList={this.state.authorList}
          labelList={this.state.labelList}
          openCount={this.open}
          closedCount={this.closed}
        />
        {ele}
      </div>
    )
  }
}
