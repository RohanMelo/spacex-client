import React from "react";

const RocketListItem = ({ rocket }) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content content">
            <h4>{rocket.rocket_name}</h4>
        </div>
      </div>
    </div>
  );
};

export default RocketListItem;
