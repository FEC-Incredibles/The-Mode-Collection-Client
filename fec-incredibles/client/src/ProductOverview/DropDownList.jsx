import { useState, useEffect } from "react";
import DownArrowIcon from '../SVGs/DownArrowIcon.jsx'

//this is the actual drop down menu component
const DropDownSizeList = ({ testid, placeHolder, options, valKey, onChange }) => {
	const [showMenu, toggleShowMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState();

	useEffect(() => {
		setSelectedOption()
		//this is an event handler to close the menu
		const handler = () => {
			toggleShowMenu(false);
		};
		//this adds that event handler to the window, so that when you click anywhere, it closes the drop down menu
		window.addEventListener("click", handler);
		return () => {
			window.removeEventListener("click", handler);
		};
	}, [options]);

  //this is the event handler for when the user clicks on the drop down menu
	const handleInputClick = (e) => {
		e.stopPropagation();
		toggleShowMenu(!showMenu);
	};

  //this is for handling what gets shown on the input container, at first its the place holder but once something is selected, it returns that item to be shown
	const getDisplay = () => {
		if (selectedOption) {
			return selectedOption;
		}
		return placeHolder;
	};

  //this is the event handler for when an option is clicked, first it checks if we are using objects or arrays and then it set's the state of the selected item and calls the callback for when the selection changes
	const onItemClick = (option) => {
		if (valKey) {
			setSelectedOption(options[option][valKey]);
			onChange(options[option][valKey]);
		} else {
			setSelectedOption(option);
			onChange(option);
		}
	};

  //this is to verify that an option was clicked and create a boolean to be used later for the css
	const isSelected = (option) => {
		if (!selectedOption) {
			return false;
		}

		if (valKey) {
			return selectedOption === options[option][valKey];
		} else {
			return selectedOption === option;
		}
	};

	return (
		<div data-testid={testid} className="dropdown-container">
			<div className="dropdown-input" onClick={handleInputClick}>
				<div className="dropdown-selected-value"><h3>{getDisplay()}</h3></div>
				<div className="dropdown-tools">
					<DownArrowIcon />
				</div>
			</div>
			<div className="dropdown-menu">
				{showMenu
					? valKey
						? Object.keys(options).map((option) => {
								return (
									<div
										key={option}
										className={`dropdown-item ${
											isSelected(option) && "selected"
										}`}
										onClick={() => onItemClick(option)}
									>
										<h3>{options[option][valKey]}</h3>
									</div>
								);
						  })
						: options.map((option, index) => {
								return (
									<div
										key={index}
										className={`dropdown-item ${
											isSelected(option) && "selected"
										}`}
										onClick={() => onItemClick(option)}
									>
										<h3>{option}</h3>
									</div>
								);
						  })
					: null}
			</div>
		</div>
	);
};

export default DropDownSizeList;
