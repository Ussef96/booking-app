import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button , Toast, Form } from "react-bootstrap";
import React, { useState  } from 'react';
import API from '../axios/api';
const BooksIndex = (props) => {

    const [toast, settoast] = useState(false);
    const [toastaction, settoastaction] = useState(true);
    const [showModel, setshowModel] = useState(false);
    const [formValues, setformValues] = useState({DateFrom: '', DateTo : '', BookedQuantity : '' , ResourceId: ''});
    // const [validation, setvalidation] = useState(false);
    function handleBookAction(id, flag) {
        setshowModel(flag);
        formValues.ResourceId = id;
    }
    function handleChange(name,value){
        formValues[name] = value;
    }
    function handleSubmit(requestedBook){
        console.log(requestedBook);
        API.post('Reserve',requestedBook)
        .then(response => {
            setshowModel(false);
            settoast(true);
            settoastaction(response.data);
            })
        .catch((error) => {
                console.log(error)
        })

    }
    return (  
        <>
        <h1 className="display-3">Resources</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Reserve</th>
                    </tr>
                </thead>
                <tbody>
                    {props.props.map(book => 
                            <tr key={book.id}>
                            <th scope="row">{book.id}</th>
                            <td>{book.name}</td>
                            <td>{book.quantity}</td>
                            <td><button 
                            type="button" 
                            className="btn btn-success" 
                            id={book.id}
                            onClick={() => handleBookAction(book.id,true)}>Book Now</button></td>
                            </tr>
                    )}
                </tbody>
            </table>

            <Modal show={showModel}>
                <Modal.Header closeButton onClick={() => setshowModel(false)}>
                <Modal.Title>Reserve A Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <>
                <Form>
                    <Form.Group controlId="formDateFrom">
                        <Form.Label>Date From</Form.Label>
                        <Form.Control type="date" name="DateFrom"  
                        onChange={(e) => handleChange(e.target.name,e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formDateTo">
                        <Form.Label>Date To</Form.Label>
                        <Form.Control type="date"  name="DateTo"  
                        onChange={(e) => handleChange(e.target.name,e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" min="1" name="BookedQuantity"  
                        onChange={(e) => handleChange(e.target.name,+e.target.value)} />
                    </Form.Group>
                </Form>
                <div style={{textAlign: "center"}}>
                    <Button onClick={()=> handleSubmit(formValues)} >Submit</Button>
                </div>
                

                </>
                </Modal.Body>
                
            </Modal>

            <Toast onClose={() => settoast(false)} show={toast} delay={5000} autohide >
                <Toast.Body>
                    {(toastaction) ? "Book is successfully reserved, EMAIL SENT TO admin@admin.com FOR CREATED BOOKING WITH ID -> "+formValues.ResourceId : "Failed to reserve requested book... Try Again" } </Toast.Body>
            </Toast>

        </>
    );
}
 
export default BooksIndex;