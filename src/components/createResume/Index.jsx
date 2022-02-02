import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


import CreateResumeForm from './createResumeForm';
import Resume from '../viewResume/resume';
import saveResume from '../actions';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: 'Ajith',
            lastName: 'Vp',
            email: 'ajithmangod@gmail.com',
            address: 'Valiyaparambil House',
            phone: '9747874509',
            education: [{ institute: 'Lakshmi Narayana College', year: '2005', degree: 'BSc Mathematics' }],
            experience: [{ company: 'Kraftlabs Technologies', year: '2014-2022', designation: 'Web Developer' }],
            skillOptions: ['php', 'mysql', 'python', 'react'],
            skills: []
        }
    }
    
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = async (event) => {
        const { change } = this.state;
        await this.setState({ [event.target.name]: event.target.value })
        await this.setState({ change: change + 1 });
    }

    setEducation = async (education) => {
        await this.setState({ education: education });
    }

    setExperience = async (experience) => {
        await this.setState({ experience: experience });
    }

    setSkills = async (skills) => {
        await this.setState({ skills: skills });
    }

    saveResume = () => {
        this.props.saveResume(this.state);
    }

    render() {
        const { step, firstName, lastName, email, address, phone, education, experience, skills, skillOptions } = this.state;
        const inputValues = { firstName, lastName, email, address, phone, education, experience, skills, skillOptions };

        return (
            <Row className='mt-4'>
                <Col xs lg="5">
                    <CreateResumeForm
                        step={step}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        setEducation={this.setEducation}
                        setExperience={this.setExperience}
                        setSkills={this.setSkills}
                        saveResume={this.saveResume}
                        inputValues={inputValues}
                    />
                </Col>
                <Col xs lg="7" >
                    <Resume inputValues={this.state} c={this.state.change} />
                </Col>
            </Row>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        resume: state,
    };
};

export default withRouter(connect(mapStateToProps, { saveResume })(Index));
