
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SET_USER } from '../store/user'


const MainPage = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            dispatch(SET_USER(JSON.parse(storedUser)))
        }
    },[dispatch])
    console.log(user.user)
    return (
        <div>
            {user.user.email ? user.user.email : ""}
        </div>
    )
    
}

export default MainPage;