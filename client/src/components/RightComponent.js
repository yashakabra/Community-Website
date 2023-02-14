import { height } from "@mui/system";
import React from "react";
import { Button } from "react-bootstrap";

const RightComponent = (props) => {
    const {Component} = props;
    return (
    <div style={{backgroundColor: 'lightblue', height: '100vh'}}>
        <Component/>
    </div>
    );
}

export default RightComponent;