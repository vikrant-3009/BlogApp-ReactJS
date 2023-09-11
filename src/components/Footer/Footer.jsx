import React from "react";

import classes from "./footer.module.css";

const Footer = () => {
    return ( 
        <footer className={classes.footer}>
            <p className={classes.copyright}>&copy; 2023, Made by: Vikrant Katoch 🙂</p>
        </footer>
     );
}
 
export default Footer;