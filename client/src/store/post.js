import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk('post/fetchPost',
    async () => {
        const response = await axios.get('http://127.0.0.1:3438/posts');
        return response.data
    }
)


const initialState = {
    posts : [],
    error:null,
    status : "idle"
}


export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchPost.fulfilled, (state,action) => {
            state.status = "succeeded"
            state.posts = action.payload
        })
        .addCase(fetchPost.rejected, (state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
}) 

export default postSlice.reducer