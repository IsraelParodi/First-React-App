import logo from "../logo.svg";
import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="logo-wrapper">
                    <img src={logo} alt="react logo" className="nav-logo"/>
                    <h1>React</h1>
                </div>
                {/* eslint-disable-next-line react/style-prop-object */}
                <ul className="navbar-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}