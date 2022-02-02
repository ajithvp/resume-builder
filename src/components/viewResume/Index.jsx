import React from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Resume from './resume';

const Index = (props) => {
    const resume = useSelector(state => {
        return state.resumeReducers.resume;
    });

    return (
        typeof resume.firstName == "undefined" ?
            <div style={{ height: 600 }}>
                <div className="container h-100 " >
                    <div className="row h-100 justify-content-center align-items-center">
                        Please create resume first
                    </div>
                </div>
            </div> :
            <>
                <Row className="mt-4 justify-content-md-center">
                    <Col xs lg="7">
                        <div id="resume1">
                            <Resume inputValues={resume} />
                        </div>
                    </Col>
                </Row>
            </>

    );
};

export default withRouter(Index);