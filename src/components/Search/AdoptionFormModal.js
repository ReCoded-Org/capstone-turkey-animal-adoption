import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Search.css";

const AdoptionFormModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adoption Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="adoptionFormModalBody">
          <h4 className="mb-4">Fill Our Form for Adoption Process</h4>
          <form className="adoptionForm">
            <input type="text" placeholder="Enter Your First Name"/>
            <input type="text" placeholder="Enter Your Last Name"/>
            <input type="email" placeholder="Enter Your E-Mail"/>
            <input type="tel" placeholder="Enter Your Phone Number"/>
            <input type="text" placeholder="Enter The Name of The Pet You are Adopting"/>
            <input type="text" placeholder="Enter The Breed of The Pet You are Adopting"/>
            <input type="text" placeholder="Enter Your City"/>
            <Button className="modalFormBtn shadow-none">Submit</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="modalFormBtn shadow-none">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AdoptionFormModal
  