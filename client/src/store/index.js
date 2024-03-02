import {configureStore} from '@reduxjs/toolkit'
import post from './post'
import user from './user'


export const store = configureStore({

    reducer : {
        post,
        user
    }

})

