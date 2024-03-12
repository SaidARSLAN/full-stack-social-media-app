import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({show,setShow}) {

    const handleClose = () => {
        setShow(false)
    }

  return (
    <Modal show={show} animation={true} onHide={handleClose}>
        <Modal.Header closeButton className='bg-warning text-light'>
          <Modal.Title>Login Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your email or password is not correct</Modal.Body>
      </Modal>
  );
}

export default ErrorModal;