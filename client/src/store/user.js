import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchUser = createAsyncThunk('people/fetchUser',
    async (data) => {
        const response = await axios.post('http://127.0.0.1:3438/user/login',{
                email : data.email,
                password : data.password
        });
        return response.data
    }
)


const initialState = {
    user : {
        email: "",
        password : "",
    },
    status:"idle",
    error:null
}

export const userSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        SET_USER : (state,action) => {
            state.status = "succeeded"
            state.user.email = action.payload.email
            state.user.password = action.payload.password
        },
        LOG_OUT : (state) => {
            state.status = "idle",
            state.user.email = "",
            state.user.password = ""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchUser.fulfilled, (state,action) => {
            state.status = "succeeded"
            state.user.email = action.payload.isSuccess?.email
            state.user.password = action.payload.isSuccess?.password
        })
        .addCase(fetchUser.rejected, (state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export const {SET_USER,LOG_OUT} = userSlice.actions
export default userSlice.reducer