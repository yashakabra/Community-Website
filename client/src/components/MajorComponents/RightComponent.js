import React from "react";

const RightComponent = React.memo(({Component}) => {
    console.log("CHANGING RIGHT");
    return (
    <div style={{backgroundColor: 'lightblue', height: '100vh'}}>
        <Component/>
    </div>
    );
});

export default RightComponent;