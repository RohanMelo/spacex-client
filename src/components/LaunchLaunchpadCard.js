import React from "react";

const LaunchLaunchpadCard = ({ launchpad }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://placehold.it/1280x600" alt="" />
      </div>
      <div className="card-content">
        <h4 className="is-size-5">{launchpad.site_name}</h4>
        <p>{launchpad.site_name_long}</p>
      </div>
    </div>
  );
};

export default LaunchLaunchpadCard;
