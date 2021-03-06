import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="realyellow">
            <div className="flex justify-space-between">
                <a className="nav-home-btn" href="/">
                    <h1 className="name">Must-seum</h1>
                </a>
                <div>
                <a href="/profile">
                    <img className="mona" src="resources/images/mona-lisa.png" alt="mona-lisa" href=""></img>
                    </a>
                    <button className="login">Log in</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </div>
    )
};