import React from 'react';

const SortOption = () => {
  return (
    <div className="">

      <label htmlFor="sorting-option">Total # of this product, sorted by </label>

      <select name="sorting-option" id="sorting">
        <option htmlFor="relevant">Relevant</option>
        <option htmlFor="helpful">Helpful</option>
        <option htmlFor="newest">Newest</option>
      </select>
    </div>
  )
}

export default SortOption;