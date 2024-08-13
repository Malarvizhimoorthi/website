import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import gmail from './gmail.png';
import facebook from './facebook.png';
import contact from './contact.jpg';
import InputGroup from 'react-bootstrap/InputGroup';






function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Independence day Meeting</h2>
                <h3>Registration Form</h3>
               
                <div className="contact-form">
                    <Form action="Success.html" method="post" noValidate validated={validated}
                        onSubmit={handleSubmit}>

                        <Form.Group className="input" as={Col} md="8" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="input" as={Col} md="8" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="input" as={Col} md="8" controlId="validationCustom05">
                            <Form.Label>Email id</Form.Label>
                            <Form.Control type="text" placeholder="email" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Email id
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="8" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="8" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group >
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>

                </div>
                <div class="contact-icons">
                    <a href="#"><img width='20px' src={gmail} alt='gmail.png' /></a>
                    <a href="#"><img width='25px' src={facebook} alt='facebook.png' /></a>
                </div>
            </div>
        </div>
    );
}
export default Contact;