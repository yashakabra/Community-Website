import React from "react";

const LeftComponent = React.memo((props) => {
    const {Component} = props;
    return (
        <div style={{}}>
            <Component/>
        </div>
    );
});

export default LeftComponent;