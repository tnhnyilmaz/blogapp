import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    posts: [],
    postsState: STATUS.IDLE,
    localPosts: []

}
export const GetAllPosts = createAsyncThunk("GetAllPosts", async () => {

    try {
        const response = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
        if (!response.ok) {
            throw new Error("Veri alınırken hata oluştu!");
        }
        const data = await response.json();
        console.log("Apiden gelen veri: ", data);
        return data.blogs;
    } catch (error) {
        console.error("Hata:", error);
    }


});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addLocalPost: (state, action) => {
            state.localPosts.unshift(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetAllPosts.pending, (state) => {
                state.postsState = STATUS.LOADING;
            })
            .addCase(GetAllPosts.fulfilled, (state, action) => {
                state.postsState = STATUS.SUCCESS;
                state.posts = action.payload;
            })
            .addCase(GetAllPosts.rejected, (state) => {
                state.postsState = STATUS.FAIL;
            })

    }
})
export const { addLocalPost } = postsSlice.actions;
export default postsSlice.reducer;