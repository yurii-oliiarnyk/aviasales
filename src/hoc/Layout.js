import React from 'react';
import Logo from '../component/Logo/Logo';

const layout = props => {
    return (
        <React.Fragment>
            <Logo />
            <main className="page-content">
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;