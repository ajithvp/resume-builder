import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';

class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.inputValues;
    }

    render() {

        return (
            <Container className="justify-content-md-center">
                <Row>
                    <h2 className='text-capitalize'>{this.props.inputValues.firstName} {this.props.inputValues.lastName}</h2>
                    <h6>{this.props.inputValues.email}</h6>
                    <h6>{this.props.inputValues.phone}</h6>
                    <h6 className='text-capitalize'>{this.props.inputValues.address}</h6>
                </Row>
                <hr />
                <h4>Education</h4>
                {
                    this.props.inputValues.education.map((element, i) => {
                        return (<div key={i}>
                            <h5>{element.institute}</h5>
                            <h6>{element.degree} <span className='fw-light px-10'>{element.year}</span></h6>
                        </div>)
                    })
                }
                <hr />
                <h4>Experience</h4>
                {
                    this.props.inputValues.experience.map((element, i) => {
                        return (<div key={i}>
                            <h5>{element.company}</h5>
                            <h6>{element.designation} <span className='fw-light px-10'>{element.year}</span></h6>
                        </div>)
                    })
                }
                <hr />
                <h4>Skills</h4>
                {
                    this.props.inputValues.skills.map((element, i) => {
                        return (<h6 key={i}>{element}</h6>)
                    })
                }
            </Container>
        );
    }
}

export default Resume;