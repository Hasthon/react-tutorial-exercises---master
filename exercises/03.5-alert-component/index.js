import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Alert = () => {
	return (
		<div className="alert alert-danger" role="alert">
			{prop.text}
		</div>
	);
};

Alert.propType = {
	text: PropType.string
};

ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
