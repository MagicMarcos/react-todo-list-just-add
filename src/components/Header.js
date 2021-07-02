import React from 'react';
// header constant takes in some prop as an argument and returns a header with the desired style and title
const Header = props => {
	return (
		<div>
			<h1 style={headerStyle}>{props.title}</h1>
		</div>
	);
};
//styles the header and allows us to repeat
const headerStyle = {
	fontSize: '40px',
	textDecoration: 'underline',
};

export default Header;
