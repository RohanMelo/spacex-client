import React from 'react';

const Mission = (props) => {
    return (
    <div>
        Showing mission with value of {props.match.params.id}
    </div>
    );
}

export default Mission;