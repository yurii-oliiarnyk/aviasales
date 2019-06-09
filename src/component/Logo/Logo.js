import React from 'react';
import LogoImage from '../../assets/images/svg.svg';
import './Logo.scss';

const logo = () => (
	<div className="logo">
		<div className="container">
			<img src={LogoImage} alt="Logo" />
		</div>
	</div>
);

export default logo;

