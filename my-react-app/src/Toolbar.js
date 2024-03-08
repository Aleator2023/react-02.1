import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
      <div>
        {filters.map((filter) => (
          <button
            key={filter}
            className={filter === selected ? 'selected' : ''}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    ); 
  }
}

export default Toolbar;