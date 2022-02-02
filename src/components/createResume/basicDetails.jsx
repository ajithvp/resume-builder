import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


class BasicDetails extends Component {

    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <Container>
                <h3>Personal Details</h3>
                <Form>
                    <Row >
                        <Col xs lg="6">
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label className="label">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.firstName}
                                    name="firstName"
                                    required
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs lg="6">
                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label className="label">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.lastName}
                                    name="lastName"
                                    required
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs lg="6">
                            <Form.Group as={Col} controlId="formEmail">
                                <Form.Label className="label">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    defaultValue={this.props.inputValues.email}
                                    name="email"
                                    required
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs lg="6">
                            <Form.Group as={Col} controlId="formPhone">
                                <Form.Label className="label">Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.phone}
                                    name="phone"
                                    required
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group as={Col} controlId="formAddress">
                        <Form.Label className="label">Address</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={this.props.inputValues.address}
                            name="address"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>

                    <Button className="mt-3" variant="primary" onClick={this.next}>Next</Button>
                </Form>
            </Container>
        )
    }
}

export default BasicDetails;