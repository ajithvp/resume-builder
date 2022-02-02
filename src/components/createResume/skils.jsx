import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Skills = (props) => {

    const [selected, setSelected] = useState([]);
    const [options] = useState(props.inputValues.skillOptions);

    const handleInputChange = async(selected) => {
        await setSelected(selected);
        props.setSkills(selected);
      };

    return (
        <Container>
            <h3>Skills</h3>
            <Form>
                <Row>
                    <Col>
                        <Typeahead
                            id="basic-typeahead-multiple"
                            labelKey="name"
                            multiple
                            onChange={selected => handleInputChange(selected)}
                            options={options}
                            placeholder="Choose several states..."
                            selected={selected}
                        />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <Button variant="secondary" className=' mx-2' onClick={props.prevStep}>Previous</Button>
                        <Button variant="primary" onClick={props.saveResume}>Save Resume</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};



export default Skills;