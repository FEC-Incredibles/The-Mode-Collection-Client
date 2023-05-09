import React, { useState } from 'react';

const SortOption = ({ numOfReviews }) => {

  const [ selectedSorting, setSelectedSorting ] = useState("relevant");

  const handleChangeSorting = (e) => {
    setSelectedSorting(e.target.value);
  }

  return (
    <div className="">
      <div>Selected sorting: {selectedSorting}</div>

      <label>
        {numOfReviews} reviews, sorted by

        <select
        name="sorting-option"
        id="sorting"
        value={selectedSorting}
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