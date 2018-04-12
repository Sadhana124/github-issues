import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label }  from '../Label';

/*
The table row component, responsible for all row information
*/

export class RowData extends Component {

  handleDetailClick = (url) => {window.open(url);}

  render() {

    const {
      title,
      reporter,
      number,
      assignee,
      labels,
      url,
      date,
      status,
      comments,
    } = this.props;

    return(
      <div className="row-data" onClick = {() => this.handleDetailClick(url)}>
        <div>
        <span className={`glyphicon glyphicon-exclamation-sign ${status}`}></span>
        <span className="title">{title}</span>
        <Label labels={labels} />
        </div>
        <div className="line-2">
          <span>#{number} opened on { date} by {reporter}</span>
          {comments > 0 && <span className="pull-right glyphicon glyphicon-comment">{comments}</span>}
          {assignee && <img alt="aaignee avatar" className="pull-right assignee-avatar" src={assignee.avatar_url}/>}
          {assignee && <div className="pull-right assignee-name">Assigned to {assignee.login}</div>}
        </div>
      </div>
    );
  }
}

RowData.propTypes = {
  number: PropTypes.number,
  reporter: PropTypes.string, // under user
  status: PropTypes.string,
  assignee: PropTypes.object,
  labels: PropTypes.array,
  title: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.number,
}
