import React, { useState} from 'react';

export const MenuBtn = ({ title, children }) => {
    const [ toggleMenu, setToggleMenu ] = useState(false);

    return(
        <button className={`menu-btn ${toggleMenu && 'menu-btn--active'}`} onClick={() => setToggleMenu(!toggleMenu)}>
          { title }
          {
            toggleMenu &&
            <div className="menu-options">
              { children }
            </div>
          }

        </button>
    );
}