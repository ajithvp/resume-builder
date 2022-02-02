import React from 'react';
import { withRouter, useHistory } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {

    const history = useHistory();
    return (
        <header className="site-header clearfix">
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand onClick={(event) => { event.preventDefault(); history.push("/") }}>Resume Builder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={(event) => { event.preventDefault(); history.push("/create-resume") }}>Create Resume</Nav.Link>
                        <Nav.Link onClick={(event) => { event.preventDefault(); history.push("/view-resume") }}>View Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default withRouter(Navigation);
