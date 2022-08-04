import {Modal, Button} from 'react-bootstrap';




const ConfirmDialog = ({
    show,
    onClose
    
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Bait</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete this post?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" >Close</Button>
                <Button variant="primary" >Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;