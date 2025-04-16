import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../redux/postSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
    },

});