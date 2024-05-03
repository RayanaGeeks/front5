import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostsSlice";

const store = configureStore({
    reducer: {
        users: postsReducer
    },
});

export default store;
