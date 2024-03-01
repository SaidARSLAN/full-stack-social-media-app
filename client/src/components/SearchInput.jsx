import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


const SearchInput = () => {



    return (

        <Form>
            <Form.Group className='mb-3' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Form.Control type='text' placeholder='search...' style={{width:"320px"}}/>
                    <Button variant='primary' style={{marginLeft:"5px"}}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Button>
            </Form.Group>

        </Form>
    )
}

export default SearchInput;