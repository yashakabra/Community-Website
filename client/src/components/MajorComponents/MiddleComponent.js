import React from "react";
import { Container } from "react-bootstrap";

const MiddleComponent = React.memo((props) => {
    const {Component} = props;
    return (
        <Container style={{ paddingTop : "5px"}}>
            <Component/>
        </Container>
    );
});

export default MiddleComponent;