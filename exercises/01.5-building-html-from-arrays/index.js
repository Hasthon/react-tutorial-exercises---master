import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
	<ul key={nav.id}classNameName="nav">
		<li key= {navitem.id} className="nav-item">
			<a key= {navlink.id}className="nav-link" href="#">
				Link to google.com
			</a>
		</li>
		<li key={navitem3.id}className="nav-item">
			<a key={navitem4.id}className="nav-link" href="#">
				Link to facebook.com
			</a>
		</li>
		<li key= {navitem5.id}className="nav-item">
			<a key= {navitem6.id}className="nav-link" href="#">
				Link to amazon.com
			</a>
		</li>
	</ul>
];

const content = <ul classNameName="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
