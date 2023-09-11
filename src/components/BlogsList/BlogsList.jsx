import React from "react";

import classes from "./blogList.module.css";
import BlogItem from "../BlogItem/BlogItem";

const BlogsList = ({ blogs }) => {
    
    if(blogs.length === 0) {
        return (
            <h3 className={classes.blogs_list__fallback}>No blogs found!</h3>
        );
    }

    return (
        <ul className={classes.blogs_list}>
            {blogs.map((blog) => (
                <BlogItem 
                    key={blog.id}
                    id={blog.id}
                    title={blog.title} 
                    categories={blog.categories}
                />
            ))}
        </ul>
    );
};
 
export default BlogsList;