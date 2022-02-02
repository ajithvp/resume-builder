import React, { Component } from 'react';
import { Form, Button,Row, Col, Container } from 'react-bootstrap';


class ExperienceDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    constructor(props) {
        super(props);
        this.state = { experience: this.props.inputValues.experience };
    }

    createUI = () => {
        return this.state.experience.map((el, i) =>
            <div key={i} className="mb-4">
                <Row>
                    <Col>
                        <Form.Group as={Col} controlId="formInstitute">
                            <Form.Label className="label">Company</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={el.company}
                                name="company"
                                required
                                onChange={this.handleChange.bind(this, i)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formYear">
                            <Form.Label className="label">Year</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={el.year}
                                name="year"
                                required
                                onChange={this.handleChange.bind(this, i)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <Form.Group as={Col} controlId="formDesignation">
                            <Form.Label className="label">Designation</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={el.designation}
                                name="designation"
                                required
                                onChange={this.handleChange.bind(this, i)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <br />
                        <Button variant="danger" disabled={i === 0} className='mt-2 mx-2' onClick={this.removeClick.bind(this, i)} >Remove </Button>
                        <Button variant="success" disabled={i !== this.state.experience.length - 1} className='mt-2 ' onClick={this.addClick.bind(this)} >Add </Button>
                    </Col>
                </Row>
            </div>
        )
    }

    handleChange = (i, event) => {

        let experience = [...this.state.experience];
        const { name, value } = event.target;
        experience[i][name] = value;
        this.props.setExperience(experience);
    }

    addClick = () => {
        this.setState(prevState => ({ experience: [...prevState.experience, { company: '', year: '', designation: '' }] }))
    }

    removeClick = (i) => {
        let experience = [...this.state.experience];
        experience.splice(i, 1);
        this.setState({ experience });
        this.props.setExperience(experience);
    }

    render = () => {
        return (
            <Container>
                <h3>Experience</h3>
                <Form>
                    <Row >
                        <Col>
                            {this.createUI()}
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <Button variant="secondary" onClick={this.back}>Previous</Button>
                            <Button className="mx-2" variant="primary" onClick={this.next}>Next</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default ExperienceDetails;