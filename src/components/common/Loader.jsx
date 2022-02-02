import React from 'react';
import './loader.css'

const Loader = () => {
    return (
        <div className="loader-wrap d-flex align-items-center justify-content-center">
            <div className="lds-ripple">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
