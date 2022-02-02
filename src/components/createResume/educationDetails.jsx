import React, { Component } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


class EducationDetails extends Component {

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
        this.state = { education: this.props.inputValues.education };
    }

    createUI = () => {
        return this.state.education.map((el, i) =>
            <div key={i} className="mb-4">
                <Row>
                    <Col>
                        <Form.Group as={Col} controlId="formInstitute">
                            <Form.Label className="label">Institute</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={el.institute}
                                name="institute"
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
                        <Form.Group as={Col} controlId="formDegree">
                            <Form.Label className="label">Degree</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={el.degree}
                                name="degree"
                                required
                                onChange={this.handleChange.bind(this, i)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <br />
                        <Button variant="danger" disabled={i === 0} className='mt-2 mx-2' onClick={this.removeClick.bind(this, i)} >Remove </Button>
                        <Button variant="success" disabled={i !== this.state.education.length - 1} className='mt-2 ' onClick={this.addClick.bind(this)} >Add </Button>
                    </Col>
                </Row>
            </div>
        )
    }

    handleChange = (i, event) => {

        let education = [...this.state.education];
        const { name, value } = event.target;
        education[i][name] = value;
        this.props.setEducation(education);
    }

    addClick = () => {
        this.setState(prevState => ({ education: [...prevState.education, { institute: '', year: '', degree: '' }] }))
    }

    removeClick = (i) => {
        let education = [...this.state.education];
        education.splice(i, 1);
        this.setState({ education });
        this.props.setEducation(education);
    }

    render = () => {
        return (
            <Container>
                <h3>Education</h3>
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

export default EducationDetails;