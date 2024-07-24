import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';


function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" activeClassName="active" exact>Accueil</Link>
            <Link to="/projects" activeClassName="active">Projets</Link>
            <Link to="/cv" activeClassName="active">CV</Link>
            <Link to="/about" activeClassName="active">À propos de moi</Link>
        </nav>
    );
}

export default NavBar;