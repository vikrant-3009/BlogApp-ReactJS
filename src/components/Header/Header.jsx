import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <Link to="/" className={classes.heading_container}>
                <h2>Blog Post App</h2>
            </Link>
        </header>
    );
}

export default Header;