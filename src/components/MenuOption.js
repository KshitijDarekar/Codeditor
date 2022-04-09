import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const MenuOption = ({ onClick, title, active = false }) => {
    return (
        <span className="option" onClick={onClick}>
            { title }
            { active && 
                <FontAwesomeIcon className='icon' icon={faCheck} />
            }
        </span>
    );
}