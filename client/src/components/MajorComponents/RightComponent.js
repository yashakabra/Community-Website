import React from "react";
import { Container } from "react-bootstrap";

const RightComponent = React.memo(({Component}) => {
    return (
    <Container style={{ paddingTop : "5px"}}>
        <Component/>
    </Container>
    );
});

export default RightComponent;