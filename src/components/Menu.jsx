import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <div className="nDiv">
            <NavLink to="/"><button className="nBtn">Home</button></NavLink>
            <NavLink to="/about"><button className="nBtn">About</button></NavLink>
        </div>
    )
}

export default Menu;