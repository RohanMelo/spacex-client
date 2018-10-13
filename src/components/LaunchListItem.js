import React from "react";
import { NavLink as Link } from "react-router-dom";

const LaunchListItem = ({ launch }) => {
  return (
    <div className="column is-half">
      <div className="card">
        <div className="card-content content">
          <h5>
            <Link to={`/launches/${launch.flight_number}`}>
              {launch.mission_name}
            </Link>
          </h5>
          <h6>{launch.launch_date_utc}</h6>
          <div className="tags">
            <span className="tag">{launch.rocket.rocket_name}</span>
            <span className="tag">{launch.launch_site.site_name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchListItem;
