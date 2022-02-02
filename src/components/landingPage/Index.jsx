import React from 'react';
import { withRouter } from 'react-router';

const index = (props) => {

    return (
        <div style={{ height: 600 }}>
            <div className="container h-100 " >
                <div className="row h-100 justify-content-center align-items-center">
                    Resume Builder
                </div>
            </div>
        </div>
    );
};

export default withRouter(index);
