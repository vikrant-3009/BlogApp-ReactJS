import { Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/Home';
import AddBlog from './pages/AddBlogPage/AddBlog';
import EditBlog from './pages/EditBlogPage/EditBlog';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Missing from './pages/MissingPage/Missing';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-blog' element={<AddBlog />} />
            <Route path='/blogs/:id/edit-blog' element={<EditBlog />} />
            <Route path='/blogs/:id' element={< BlogDetails />} />
            <Route path='*' element={<Missing />} />
        </Routes>
    );
}

export default Router;