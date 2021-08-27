// using for wadah keys

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const StudentTableRow = (props) => {
    const [show, setShow] = useState(false); //deprecated
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();

    const DeleteStudentConfirmed = (e) => {
        let host = get('host');
        fetch("https://"+host+":4000/students/delete-student/" + props.obj._id, {method: 'DELETE'})
        .then((res) => {
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
        // redirected to /student-list
        history.push('/student-list')
    }
    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.rollno}</td>
            <td>
                <Link className="edit-link" to={"/edit-student/" + props.obj._id}>
                    Edit
                </Link>
                <Button size="sm" variant="danger" onClick={handleShow}>Delete</Button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={DeleteStudentConfirmed}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </tr>
        
    );
}

export default StudentTableRow;