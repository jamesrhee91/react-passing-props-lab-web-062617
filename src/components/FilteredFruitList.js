import React, { Component } from 'react';

const FilteredFruitList = ({ fruit, filter }) => {
  const list = (filter === 'all' || !filter) ? fruit : fruit.filter(f => f.fruit_type === filter)
  return (
    <ul className="fruit-list">
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
