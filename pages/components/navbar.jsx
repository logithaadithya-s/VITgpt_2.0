import React from "react";
import VITlogo from "../../src/assets/vitgptlogo.png";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
    <>
    <header className="vitgpt-header">
        <nav className="vitgpt-navbar">
            <img src={VITlogo}/>
            <ul className="nav-links">
                <li></li>
            </ul>
        </nav>
    </header>
    </>
    );
}
export default Navbar