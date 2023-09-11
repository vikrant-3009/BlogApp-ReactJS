import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import classes from "./blogItem.module.css"

const generateUniqueId = () => {
    return uuidv4();
}

const BlogItem = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogs/${props.id}`);
    }

    return (
        <li className={classes.blog_item} onClick={handleClick}>
            <h3>{ props.title }</h3>
            <div>
                {props.categories.map((category) => (
                    <div className={classes.blog_category} key={generateUniqueId()}>
                        <span>{ category }</span>
                    </div>
                ))}
            </div>
        </li>
    );
}
 
export default BlogItem;