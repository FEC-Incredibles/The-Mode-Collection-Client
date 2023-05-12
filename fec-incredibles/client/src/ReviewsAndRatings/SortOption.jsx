import React, { useState } from 'react';

const SortOption = ({ numOfReviews, sort, setSort }) => {

  // const [ selectedSorting, setSelectedSorting ] = useState("relevant");

  const handleChangeSorting = (e) => {
    // console.log("Selected sorting: ", e.target.value);
    setSort(e.target.value);
  }

  return (
    <div className="">
      {/* <div>Selected sorting: {sort}</div> */}

      <label>
        {numOfReviews} reviews, sorted by

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