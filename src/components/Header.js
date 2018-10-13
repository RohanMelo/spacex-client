import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>SpaceX Client</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        
        <NavLink to="/launches" activeClassName="is-active" exact={true}>Launches</NavLink>
        <NavLink to="/missions" activeClassName="is-active" exact={true}>Missions</NavLink>
        <NavLink to="/rockets" activeClassName="is-active" exact={true}>Rockets</NavLink>

    </header>
);

export default Header;