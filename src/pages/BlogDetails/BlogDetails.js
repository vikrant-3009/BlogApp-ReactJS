import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import classes from "./blogDetails.module.css";
import LocalStorageContext from "../../context/local-storage-context";
import Form from "../../components/Form/Form";
import LikeButton from "../../components/LikeButton/LikeButton";
import { localStorageActions } from "../../store";

const BlogDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const ctx = useContext(LocalStorageContext);
    const blogs = [ ...ctx.blogs ];
    const blog = blogs.find((blog) => blog.id === id);
    const [isLiked, setIsLiked] = useState(blog.liked);

    const onLikeHandler = (likeState) => {
        try {
            setIsLiked(likeState);
    
            // set the like property for the blog
            const blogIdx = blogs.findIndex(blog => blog.id === id);
            blogs[blogIdx] = { ...blogs[blogIdx], liked: likeState };
    
            dispatch(localStorageActions.setBlogs(blogs));
        }
        catch(e) {
            alert("Please, Refresh the page!");
        }
    }
    
    return (
        <main className={classes.main}>
            <LikeButton onLike={onLikeHandler} isLiked={isLiked} />
            <Form 
                blog={blog} 
                isAdd={false}
                isEdit={false} 
                isDetails={true}
            />
        </main>
    );
}
 
export default BlogDetails;