import React from 'react';
import LogoImage from '../../assets/images/svg.svg';
import './Logo.css';

const logo = () => (
	<div className="logo">
		<div className="container">
			<img src={LogoImage} alt="Logo" />
		</div>
	</div>
);

export default logo;

