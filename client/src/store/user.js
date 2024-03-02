import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : {}
}


const userSlice = createSlice({

    name : "user",
    initialState,
    reducers : {
        SAVE_USERNAME : (state,action) => {

            state.user = action.payload
        }    
    }

})



export const {SAVE_USERNAME} = userSlice.actions

export default userSlice.reducer;