import React from 'react';

export const Menu = ({ children }) => {
    return (
        <nav className="menu">
            { children }
        </nav>
    );
}