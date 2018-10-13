import React from 'react';

const RocketsId = (props) => {
    console.log(props);
    return (
    <div>
        Showing Rocket with value of {props.match.params.id}
    </div>
    );
}

export default RocketsId;