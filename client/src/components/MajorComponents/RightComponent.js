import React from "react";

const RightComponent = React.memo(({Component}) => {
    return (
    <div style={{backgroundColor: 'lightblue', height: '100vh'}}>
        <Component/>
    </div>
    );
});

export default RightComponent;