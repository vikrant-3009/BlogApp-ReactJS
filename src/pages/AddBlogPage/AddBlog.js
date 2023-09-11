import React from "react";

import classes from "./addBlog.module.css";
import Form from "../../components/Form/Form";

const AddBlog = () => {
    const blog = { title: '', categories: [], content: '' };

    return ( 
        <main className={classes.main}>
            <Form 
                blog={blog} 
                isAdd={true}
                isEdit={false}
                isDetails={false}
            />
        </main>
    );
}
 
export default AddBlog;