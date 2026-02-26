import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => 
{
    return(
        <section className="header">
            <h1 className="Logo">DAN<span>talian</span></h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <link to="/">Home</link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar