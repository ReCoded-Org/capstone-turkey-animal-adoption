import React from "react";
import { Formik, Field, Form } from 'formik';
import { Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { blackCat } from "../../images/catSignUpModal.png";


const SignUpModal = ({show}) => {



  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={blackCat} />
          <p>Logolar</p>
          <p>Or use your email to create new account</p>
          <Formik>
            <Form>
              <label htmlFor="firstName"></label>
              <Field id="firstName" name="firstName" placeholder="Your Name" />

              <label htmlFor="youremail"></label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />

              <label htmlFor="password"></label>
              <Field id="password" name="password" placeholder="Password" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Sign Up</Button>

        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default SignUpModal;