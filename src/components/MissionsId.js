import React from 'react';

const MissionsId = (props) => {
    console.log(props);
    return (
    <div>
        Showing mission with value of {props.match.params.id}
    </div>
    );
}

export default MissionsId;