import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    posts : []
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts',  async () => {

    try {
        const data = await fetch("http://localhost:3438/posts");
        const data_1 = await data.json();
        return data_1;
    } catch (err) {
        console.log("# Fetch Posts Error", err.message);
        return null
    }
})


const postSlice = createSlice({

    name:"post",
    initialState,
    reducers : {

    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state,action) => {
            state.status = "loading"
        })
        .addCase(fetchPosts.fulfilled, (state,action) => {
            state.status = "succeeded"
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state,action) => {
            state.status = "failded"
            state.error = action.error.message
        })
    }
})


export default postSlice.reducer