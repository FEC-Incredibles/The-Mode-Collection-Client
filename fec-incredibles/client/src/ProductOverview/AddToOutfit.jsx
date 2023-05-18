import { useState, useEffect } from "react";
import DropDownList from "./DropDownList.jsx";
import axios from "axios";

const AddToOutfit = ({ selectedStyleData, outfit, setOutfit }) => {
  const [skus, setSkus] = useState();
  const [skuId, setSkuId] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [availableQuantity, setAvailableQuantity] = useState([]);

  useEffect(() => {
    setSkus(selectedStyleData.skus);
    setSelectedSize()
    setAvailableQuantity([])
  }, [selectedStyleData]);

  const setQuantityFromSize = (size) => {
    if (size === "select a size") {
      return;
    }
    //for the camo onesie, this filter fails because for some reason there is a second size option with the label "XL", but it has a different quantity and SKU id. for now the program just grabs the first option for XL and ignores the second one but may have to look into a solution later if this becomes a bigger issue
    const [skuidForThatSize] = Object.keys(skus).filter(
      (skuid) => skus[skuid]["size"] === size
    );
    setSkuId(skuidForThatSize);
    setAvailableQuantity(generateList(skus[skuidForThatSize]["quantity"]));
  };

  const generateList = (total) => {
    const max = 15;
    if (total === 0 || total === undefined) {
      return ["OUT OF STOCK"];
    } else if (total > max) {
      return Array.from({ length: max }, (_, i) => i + 1);
    } else {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
  };

  if (!skus) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-row" style={{"alignItems": "center"}}>
			<div className="flex-col" style={{"margin":"10px"}}>
				<div style={{'margin':"7px"}}>
					<p>size</p>
					{skus.null === undefined ? (
						<DropDownList
						testid="sizeDDM"
						placeHolder={"select a size"}
						options={skus}
						valKey={"size"}
						onChange={(value) => {
							setQuantityFromSize(value);
							setSelectedSize(value);
						}}
						/>
						) : (
							<DropDownList placeHolder={"OUT OF STOCK"} options={[]} />
							)}
				</div>
				{/* <br /> */}
				<div style={{'margin':"7px"}}>
					<p>quantity</p>
					<DropDownList
						testid="quantityDDM"
						placeHolder={availableQuantity.length ? "1" : "-"}
						options={availableQuantity}
						onChange={(value) => {
							setSelectedQuantity(value);
						}}
						/>
				</div>
			</div>
      {selectedQuantity && selectedSize && (
				<div className="add-to-outfit-button"
				onClick={() => {
					outfit.indexOf(skuId) === -1 ? setOutfit([...outfit, skuId]) : null;
				}}
        >
        <h3>add to outfit</h3>
        </div>
      )}
    </div>
  );
};

export default AddToOutfit;
