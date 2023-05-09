import { useState, useEffect } from "react";

//this is the little v arrow at the right side of the drop down menu, you can ignore this component
const DownArrowIcon = () => {
	return (
		<svg height="20" width="20" viewBox="0 0 20 20">
			<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
		</svg>
	);
};

//this is the actual drop down menu component
const DropDownSizeList = ({ placeHolder, options, valKey, onChange }) => {
	const [showMenu, toggleShowMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState();

	useEffect(() => {
		//this is an event handler to close the menu
		const handler = () => {
			toggleShowMenu(false);
		};
		//this adds that event handler to the window, so that when you click anywhere, it closes the drop down menu
		window.addEventListener("click", handler);
		return () => {
      //this removes the eventListener?
			window.removeEventListener("click", handler);
		};
	}, []);

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
		<div className="dropdown-container">
			<div className="dropdown-input" onClick={handleInputClick}>
				<div className="dropdown-selected-value">{getDisplay()}</div>
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
										{options[option][valKey]}
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
										{option}
									</div>
								);
						  })
					: null}
			</div>
		</div>
	);
};

export default DropDownSizeList;
