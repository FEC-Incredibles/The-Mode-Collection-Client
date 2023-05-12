import React, { useState } from 'react';

const SortOption = ({ reviews, sort, setSort }) => {

  const handleChangeSorting = (e) => {
    // console.log("Selected sorting: ", e.target.value);
    setSort(e.target.value);
  }

  return (
    <div className="">

      <label>
        {reviews.length} reviews, sorted by

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