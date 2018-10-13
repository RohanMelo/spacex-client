import React from 'react';

const Rocket = (props) => {
    return (
    <div>
        Showing Rocket with value of {props.match.params.id}
    </div>
    );
}

export default Rocket;