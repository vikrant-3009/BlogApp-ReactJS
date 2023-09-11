import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import classes from "./form.module.css";
import LocalStorageContext from "../../context/local-storage-context";
import Preloader from "../Preloader/Preloader";
import Modal from "../Modal/Modal";
import { localStorageActions } from "../../store";

// For generating a new unique id
const generateUniqueId = () => {
  return uuidv4();
};

const Form = (props) => {
  const [title, setTitle] = useState(props.blog.title);
  const [categories, setCategories] = useState(props.blog.categories);
  const [content, setContent] = useState(props.blog.content);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isAdd] = useState(props.isAdd);
  const [isEdit] = useState(props.isEdit);
  const [isDetails] = useState(props.isDetails);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const ctx = useContext(LocalStorageContext);
  var blogs = ctx.blogs;

  // confirm delete handler function
  const confirmDeleteHandler = () => {
    try {
        setShowModal(false);
        setLoading(true);
    
        const blog_idx = blogs.findIndex((blog) => blog.id === id);
        blogs.splice(blog_idx, 1);
    
        dispatch(localStorageActions.setBlogs(blogs));
    
        setLoading(false);
        navigate("/");
    }
    catch(e) {
        alert("Please, Refresh the page!");
        setLoading(false);
    }
  };

  // delete button handler function (on blog details page)
  const deleteBtnHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // edit button handler function (on blog details page)
  const editBtnHandler = (e) => {
    e.preventDefault();
    navigate(`/blogs/${id}/edit-blog`);
  };

  // edit submit handler function (for submitting edited blog)
  const editSubmitHandler = (e) => {
    try{
        e.preventDefault();
        setLoading(true);
    
        if (!title || !categories || !content) {
          setLoading(false);
          return setError("Input fields can't be empty!");
        }
    
        const blog_idx = blogs.findIndex((blog) => blog.id === id);
        blogs[blog_idx] = { id, title, categories, content };
    
        dispatch(localStorageActions.setBlogs(blogs));
    
        setTitle("");
        setCategories("");
        setContent("");
    
        setLoading(false);
        navigate("/");
    }
    catch(e) {
        alert("Please, Refresh the page!");
        setLoading(false);
    }
  };

  // submit handler function (for new adding new blog)
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        if (!title || !categories || !content) {
          setLoading(false);
          return setError("Input fields can't be empty!");
        }
    
        const blogId = generateUniqueId();
        const blog = { id: blogId, title, categories, content, liked: false };
        blogs.push(blog);
    
        dispatch(localStorageActions.setBlogs(blogs));
    
        setTitle("");
        setCategories("");
        setContent("");
    
        setLoading(false);
        navigate("/");
    }
    catch(e) {
        alert("Please, Refresh the page!")
        setLoading(false);
    }
  };

  // categories blur handler function (for formatting the added categories)
  // categories will be formatted to [abc, def, ...]
  // will be invoked on (onBlur event)
  const categoriesBlurHandler = (e) => {
    const categories_temp = e.target.value;
    const transformed_categories = categories_temp.replace(/ *, */g, ", ");
    const categories_arr = transformed_categories.split(", ");
    const filtered_categories = categories_arr.filter(
      (category) => category !== ""
    );
    setCategories(filtered_categories);
  };

  // if loading is true => set the PreLoader
  if (loading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      {(isAdd && <h3 className={classes.h3}>Add New Blog</h3>) ||
        (isEdit && <h3 className={classes.h3}>Edit Blog</h3>) ||
        (isDetails && <h3 className={classes.h3}>Blog Details</h3>)}
      <form autoComplete="off" className={classes.form}>
        {error && <div className="alert alert-warning">{error}</div>}
        <div className={classes.row}>
          <label htmlFor="title" className={classes.form_label}>
            Title*
          </label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="My First Blog"
            className={classes.form_input}
            onChange={(e) => setTitle(e.target.value)}
            readOnly={isDetails}
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="categories" className={classes.form_label}>
            Categories*
          </label>
          <input
            type="text"
            value={categories}
            name="categories"
            placeholder="React, Redux, JavaScript"
            className={classes.form_input}
            onChange={(e) => setCategories(e.target.value)}
            onBlur={categoriesBlurHandler}
            readOnly={isDetails}
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="content" className={classes.form_label}>
            Content*
          </label>
          <textarea
            name="content"
            cols="30"
            rows="7"
            value={content}
            placeholder="Write your blog here."
            className={classes.form_textarea}
            onChange={(e) => setContent(e.target.value)}
            readOnly={isDetails}
          />
        </div>
        {(isAdd && (
          <div className={classes.row}>
            <button
              className={`${classes.btn} ${classes.btn_submit}`}
              onClick={submitHandler}
            >
              Submit
            </button>
            <button
              className={`${classes.btn} ${classes.btn_reset}`}
              type="reset"
            >
              Reset
            </button>
          </div>
        )) ||
          (isEdit && (
            <div className={classes.row}>
                <button
                    className={`${classes.btn} ${classes.btn_submit}`}
                    onClick={editSubmitHandler}
                >
                    Submit
                </button>
              <button
                className={`${classes.btn} ${classes.btn_back}`}
                onClick={() => navigate("/")}
                type="button"
              >
                Home
              </button>
            </div>
        )) ||
          (isDetails && (
            <div className={classes.row}>
              <button
                className={`${classes.btn} ${classes.btn_submit}`}
                onClick={editBtnHandler}
              >
                Edit
              </button>
              <button
                className={`${classes.btn} ${classes.btn_reset}`}
                onClick={deleteBtnHandler}
              >
                Delete
              </button>
            </div>
        ))}
        {showModal && (
          <Modal
            onConfirm={confirmDeleteHandler}
            onClose={() => setShowModal(false)}
          >
            Are you sure you want to delete?
          </Modal>
        )}
      </form>
    </React.Fragment>
  );
};

export default Form;
