import { height } from "@mui/system";
import React from "react";
import { Button } from "react-bootstrap";

const RightComponent = React.memo(({Component}) => {
    // const {Component} = props;
    console.log("RENDERED REIGHT");
    return (
    <div style={{backgroundColor: 'lightblue'}}>
        <Component/>
    </div>
    );
});

export default RightComponent;