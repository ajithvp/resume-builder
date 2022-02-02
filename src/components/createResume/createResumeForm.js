import React, { Component } from 'react';
import { withRouter } from 'react-router';

import BasicDetails from './basicDetails';
import EducationDetails from './educationDetails';
import ExperienceDetails from './experienceDetails'
import Skills from './skils';

class CreateResumeForm extends Component {

    render() {
        const step = this.props.step;
        switch (step) {
            case 1:
                return <BasicDetails
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                    handleChange={this.props.handleChange}
                    inputValues={this.props.inputValues}
                />
            case 2:
                return <EducationDetails
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                    setEducation={this.props.setEducation}
                    inputValues={this.props.inputValues}
                />
            case 3:
                return <ExperienceDetails
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                    setExperience={this.props.setExperience}
                    inputValues={this.props.inputValues}
                />
            case 4:
                return <Skills
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                    inputValues={this.props.inputValues}
                    setSkills={this.props.setSkills}
                    saveResume={this.props.saveResume}
                />
            default:
                return <BasicDetails
                    nextStep={this.props.nextStep}
                    prevStep={this.props.prevStep}
                    handleChange={this.props.handleChange}
                    inputValues={this.props.inputValues}
                />

        }
    }
}

export default withRouter(CreateResumeForm);
