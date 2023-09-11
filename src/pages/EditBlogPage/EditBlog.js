import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import classes from "./editBlog.module.css";
import LocalStorageContext from "../../context/local-storage-context";
import Form from "../../components/Form/Form";

const EditBlog = () => {
    const { id } = useParams();
    const ctx = useContext(LocalStorageContext);
    const blogs = ctx.blogs;
    const blog = blogs.find((blog) => blog.id === id);

    return ( 
        <main className={classes.main}>
            <Form 
                blog={blog} 
                isAdd={false}
                isEdit={true}
                isDetails={false}
            />
        </main>
    );
}
 
export default EditBlog;