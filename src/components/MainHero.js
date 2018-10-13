import React from "react";
import { NavLink as Link } from "react-router-dom";

import Countdown from "./Countdown";

const MainHero = ({ latest, launch }) => {
  const heroColor = latest ? "warning" : "primary";
  return (
    <div className={`hero is-medium is-${heroColor}`}>
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-3">
            {!latest ? "Próximo Lançamento: " : "Último Lançamento: "}
            <Link to="/launches/next">{launch.mission_name}</Link>
          </h1>
          {!latest && <Countdown launchDate={launch.launch_date_utc} />}
          {/* TODO: Formatar data com [date-fns](https://date-fns.org/) */}
          <p>
            Lançamento em <strong>{launch.launch_date_utc}</strong>
          </p>
          <div style={{ marginTop: "1rem" }}>
            <div className="tags">
              <span className="tag is-light is-medium">
                <Link to={`/rockets/${launch.rocket.rocket_id}`}>
                  {launch.rocket.rocket_name}
                </Link>
              </span>
              <span className="tag is-light is-medium">
                <Link to={`/launchpads/${launch.launch_site.site_id}`}>
                  {launch.launch_site.site_name}
                </Link>
              </span>
            </div>
          </div>
          <div className="buttons" style={{ marginTop: "2rem" }}>
            <div className="button is-white">Reddit</div>
            <div className="button is-white">Wikipedia</div>
            <div className="button is-white">Flickr</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
