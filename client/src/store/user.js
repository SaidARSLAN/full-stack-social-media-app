import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchUser = createAsyncThunk('people/fetchUser',
    async () => {
        const response = await axios.get('http://localhost:3000/user');
        console.log(response)
        return response.data
    }
)


const initialState = {
    user : {
        username : "",
        email: "",
        password : "",
    },
    status:"idle",
    error:null
}

export const userSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchUser.fulfilled, (state,action) => {
            state.status = "succeeded"
            state.user = action.payload
        })
        .addCase(fetchUser.rejected, (state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer