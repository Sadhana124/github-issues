import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonDropdownSort extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected || '',
      filteredData: this.props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredData: nextProps.data
    });
  }

  render() {

    const {label} = this.props;
    const {filteredData, selected} = this.state

    const options = filteredData.map((item) => {
      return <li key={item.label}><a role='button' key={item.value} onClick={()=>this.onSelect(item.value)}>
        {selected.includes(item.value) ? (<span className="glyphicon glyphicon-ok"></span>) : null}{item.label}
        </a></li>
    })

    return(
      <div className="dropdown dropdown-filter">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{label}
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
          {options}
          </ul>
        </div>
    );
  }

  onTextChange = (event) => {
    let {data} = this.props
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
      selected = [value];
    }

    this.setState({
      selected: selected
    })
    this.props.onFilter(this.props.filterKey, selected.join(','));
  }
//   onSelect = (value) => {
//     let {selected} = this.state
//     if (selected == value) {
//       selected = '';
//     } else {
//       selected = value;
//     }

//     this.setState({
//       selected: selected
//     })
//     this.props.onFilter(this.props.filterKey, selected.join(','));
//   }
 }

ButtonDropdownSort.propTypes = {
  onFilter: PropTypes.func,
  data: PropTypes.array,
  label: PropTypes.string,
  filterKey: PropTypes.string,
}

ButtonDropdownSort.defaultProps = {
  data: []
}
