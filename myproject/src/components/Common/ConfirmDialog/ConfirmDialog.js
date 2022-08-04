import {Modal, Button} from 'react-bootstrap';
import styles from './ConfirmDialog.module.css'



const ConfirmDialog = ({
    show,
    onClose, 
    deleteBait
    
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Bait</Modal.Title>
            </Modal.Header>

            <Modal.Body className={styles.modal} >
                <p className={styles.modal} >Are you sure you want to delete this post?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose} >Cancel</Button>
                <Button variant="custom" 
                className={styles.btncustom} onClick={deleteBait}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;