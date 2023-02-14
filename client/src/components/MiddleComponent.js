import React from "react";

const MiddleComponent = (props) => {
    const {Component} = props;
    return (
        <div style={{backgroundColor: 'red', height: '100vh'}}>
            <Component/>
        </div>
    );
}

export default MiddleComponent;