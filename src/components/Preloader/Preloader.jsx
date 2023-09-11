import React from "react";

import classes from "./preloader.module.css";

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <h3>Loading...</h3>
        </div>
    );
}
 
export default Preloader;