import React, { useState } from "react";
 
import classes from "./likeButton.module.css";

const LikeButton = (props) => {
    const [liked, setLiked] = useState(props.isLiked);

    const likeHandler = () => {
        setLiked(!liked);
        props.onLike(!liked);
    }

    return (
        <button 
            className={`${classes.btn_wrapper} ${liked ? classes.liked : ''}`}
            onClick={likeHandler}
        >
            { liked && <span>Liked</span> }
            { !liked && <span>Like</span> }
        </button>
    );
}
 
export default LikeButton;