import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
The table row label component, responsible for rendering tags
*/

export class Label extends Component {

  render() {

    const {
      labels
    } = this.props;

    const ele = labels.length > 0 ? labels.map((val) => {
        return(<span key={val.id} className="label" style={{backgroundColor: '#'+val.color}}>{val.name}</span>)
    }) : null;

    return(
      <span>{ele}</span>
    )
  }
}

Label.propTypes = {
  labels: PropTypes.array,
}