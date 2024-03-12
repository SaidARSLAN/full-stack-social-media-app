import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchPost } from '../store/post'
import Container from 'react-bootstrap/Container'
import PostCard from './PostCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'


const MiddlePlace = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        
        dispatch(fetchPost())

    },[dispatch])
    return (
        <Container>
            <Row>
            {posts?.length > 0 ? posts.map((post) => <Col className='d-flex align-items-center justify-content-center' xs={12}><PostCard post={post}/></Col>) : <h1></h1>}
            </Row>
        </Container>
    )
}

export default MiddlePlace