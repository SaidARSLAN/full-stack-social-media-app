import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {
        username : "",
        email: "",
        password : "",
    }
}

export const userSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {}
})
