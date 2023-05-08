import { useState, useEffect } from "react";
import DropDownList from "./DropDownList.jsx";

const AddToOutfit = ({ data }) => {
	const [skus, setSkus] = useState();
	const [selectedSize, setSelectedSize] = useState({
		size: null,
		quantity: null,
	});
	const [availableQuantity, setAvailableQuantity] = useState(["select a size"]);

	useEffect(() => {
		setSkus(data.skus);
	}, [data]);

	const setQuantityFromSize = (size) => {
		if (size === "select a size") {
			return;
		}
		//for the camo onesie, this filter fails because for some reason there is a second size option for XL that has a different quantity and SKU id, for now the program just grabs the first option for XL and ignores the second one but may have to look into a solution later if this becomes a bigger issue
		const [skuidForThatSize] = Object.keys(skus).filter(
			(skuid) => skus[skuid]["size"] === size
		);
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

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(e);
			}}
			id="AddToOutfit"
		>
			<label htmlFor="size">Size</label>

			<select
				id="size"
				name="size"
				onChange={(e) => {
					setQuantityFromSize(e.target.value);
				}}
			>
				<option value="select a size">select a size</option>

				{Object.keys(data.skus).map((skuid) => (
					<option key={skuid} value={data.skus[skuid].size}>
						{data.skus[skuid].size}
					</option>
				))}
			</select>

			<label htmlFor="quantity">Quantity</label>
			<select
				id="quantity"
				name="quantity"
				onChange={(e) => {
					console.log(e);
				}}
			>
				<option value="select a quantity">select a quantity</option>
				{availableQuantity.map((val, index) => {
					<option key={index} value={val}>
						{val}
					</option>;
				})}
			</select>
			<button type="submit">add to outfit</button>
		</form>
	);
};

export default AddToOutfit;
