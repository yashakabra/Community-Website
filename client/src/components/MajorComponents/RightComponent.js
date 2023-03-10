import React from "react";

const RightComponent = React.memo(({Component}) => {
    return (
    <div style={{backgroundColor: 'lightblue'}}>
        <Component/>
    </div>
    );
});

export default RightComponent;