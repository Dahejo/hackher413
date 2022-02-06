import React from "react";

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-space-between">
                <h1>Must-seeum</h1>
                <div>
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
};