import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./home.module.css";
import BlogsList from "../../components/BlogsList/BlogsList";
import LocalStorageContext from "../../context/local-storage-context";

const Home = () => {
    const navigate = useNavigate();
    const ctx = useContext(LocalStorageContext);
    let blogs = ctx.blogs;

    const handleAddBlogBtn = () => {
        navigate('/add-blog');
    }

    return ( 
        <main className={classes.main}>
            <div className={classes.hero_1}>
                <button onClick={handleAddBlogBtn} className={`${classes.btn} ${classes.btn_add_blog}`}>
                    Add Blog
                </button>
            </div>
            <div className={classes.hero_2}>
                <BlogsList blogs={blogs} />
            </div>
        </main>
    );
}
 
export default Home;