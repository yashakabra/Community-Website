import React from "react";

const MiddleComponent = React.memo((props) => {
    const {Component} = props;
    return (
        <div style={{}}>
            <Component/>
        </div>
    );
});

export default MiddleComponent;