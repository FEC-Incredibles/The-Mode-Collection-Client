import React, { useState } from 'react';

const SortOption = ({ length, sort, setSort }) => {

  const handleChangeSorting = (e) => {
    setSort(e.target.value);
  }

  return (
    <div className="">

      <label>
        {length} reviews, sorted by

        <select
        name="sorting-option"
        id="sorting"
        value={sort}
        onChange={handleChangeSorting}>

          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </label>
    </div>
  )
}

export default SortOption;