import React from "react";
import './style.scss';

function Header(){
    return(
        <header>
            <h1>Portfolio</h1>
            <nav className="reseaux-sociaux">
                <a href="#">Linkedin</a>
                <a href="#">gitHub</a>
                <a href="mailto:elyesbenguirat@gmail.com">Email</a>
            </nav>
        </header>
    )
}

export default Header;