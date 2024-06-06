import React from 'react';
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    )
}

export default function Galeria() {
    return (
        <section>
            <div>
                <h1> Katherine Johnson </h1>
                <Profile />
                <h1>Amazing Scientists</h1>
                <Profile />
                <Profile />
                <Profile />
            </div>
            <div>
                {<Link className="Link" to={"/"}>Home</Link>}
            </div>
        </section>

    );
}