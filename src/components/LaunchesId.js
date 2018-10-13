import React from 'react';

const LaunchesId = (props) => {
    console.log(props);
    return (
    <div>
        Showing launch with value of {props.match.params.id}
    </div>
    );
}

export default LaunchesId;