import React from "react";

const LeftComponent = React.memo((props) => {
    const {Component} = props;
    return (
        <div style={{backgroundColor: 'orange', height: '100vh'}}>
            <Component/>
        </div>
    );
});

export default LeftComponent;