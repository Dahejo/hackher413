import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="realyellow">
            <div className="flex justify-space-between">
                <h1 className="name">Must-seum</h1>
                <div>
                    <img className="mona" src="resources/images/mona-lisa.png" alt="mona-lisa" href=""></img>
                    <button className="login">Log in</button>
                    <button className="signup">Sign up</button>
                </div>
            </div>
        </div>
    )
};