import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonDropdownFilter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected || [],
      filteredData: this.props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredData: nextProps.data
    });

  }

  render() {

    const {label} = this.props;
    const {filteredData, selected} = this.state

    const options = filteredData.map((value) => {
      return <li key={value}><a role='button' key={value} onClick={()=>this.onSelect(value)}>
        {selected.includes(value) ? (<span className="glyphicon glyphicon-ok"></span>) : null}{value}
        </a></li>
    })

    return(
      <div className="dropdown dropdown-filter">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{label}
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
          <li><input type="text" name="search" onChange={(event)=>this.onTextChange(event)}/></li>
          {options}
          </ul>
        </div>
    );
  }

  onTextChange = (event) => {
    let {data} = this.props;
    const filteredData = data.filter((value) => {
      return value.toLowerCase().includes(event.target.value)
    })
    this.setState({
      filteredData: filteredData
    });
  }

  onSelect = (value) => {
    let {selected} = this.state
    if (selected.includes(value)) {
      selected = selected.filter(val => val !== value);
    } else {
      if (this.props.type === 'single') {
        selected = [value];
      } else {
        selected.push(value);
      }
    }

    this.setState({
      selected: selected
    })
    this.props.onFilter(this.props.filterKey, selected.join(','))
  }
}

ButtonDropdownFilter.propTypes = {
  onFilter: PropTypes.func,
  data: PropTypes.array,
  label: PropTypes.string,
  type: PropTypes.string,
  filterKey: PropTypes.string,
}

ButtonDropdownFilter.defaultProps = {
  data: []
}
