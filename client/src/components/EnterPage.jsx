import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';




const EnterPage = () => {


    return (
            <>
                 <h1>Welcome To MyChat</h1>
              <Button variant='primary'><NavLink to='/index' style={{color:'white',textDecoration:'none'}}>Let's dive</NavLink></Button>
            </>
    )

}

export default EnterPage;