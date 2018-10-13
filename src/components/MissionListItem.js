import React from "react";

const MissionListItem = ({ mission }) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content content">
          <h5>{mission.mission_name}</h5>
          <p>{mission.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionListItem;
