import { useEffect } from "react";
import post, { fetchPosts } from "../store/post";
import {useSelector,useDispatch} from 'react-redux'
import PostModel from "./PostModel";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const MainSection = () => {

        const dispatch = useDispatch()
        const posts = useSelector(state => state.post.posts)
        const postStatus = useSelector(state => state.post.status)
        useEffect(() => {

            dispatch(fetchPosts())
        },[dispatch])
        if (postStatus == "succeeded") {
            console.log(posts)
        }
    return (
        <Container>
        <Row>
        {postStatus === "loading" && <p>Loading...</p>}
        {postStatus === "failed" && <p>Error fetching posts.</p>}
        {postStatus === "succeeded" && posts &&  posts.length > 0 ? (
            <Col xs={4}>
            {
                posts.map((post) => <PostModel {...post} key={post.id}/>)
            }
            </Col>
            ) : (
                <p>No posts available.</p>
                )}
                </Row>
            </Container>
    )
}

export default MainSection;