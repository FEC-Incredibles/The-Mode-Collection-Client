import React from "react";
const DownArrowIcon = ({clickEvent, CSSclass}) => (
	<div onClick={clickEvent} className={`${CSSclass}`}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path stroke="#F9D949" fill="#F9D949" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
		</svg>
	</div>
);
export default DownArrowIcon;
