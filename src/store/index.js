import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLocalStorageState = { blogs: [] };

const localStorageSlice = createSlice({
    name: "localStorage",
    initialState: initialLocalStorageState,
    reducers: {
        setBlogs(state, action) {
            localStorage.setItem("blogs", JSON.stringify(action.payload));
            state.blogs = action.payload;
        }
    }
});

const store = configureStore({
    reducer: localStorageSlice.reducer
});

export const localStorageActions = localStorageSlice.actions;

export default store;