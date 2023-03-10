import React from "react";

const RightComponent = React.memo(({Component}) => {
    return (
    <div style={{}}>
        <Component/>
    </div>
    );
});

export default RightComponent;