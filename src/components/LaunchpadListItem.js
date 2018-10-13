import React from "react";

const LaunchpadListItem = ({ launchpad }) => {
  return (
    <div className="column is-half">
      <div className="card">
        <div className="card-image">
          <img src="https://placehold.it/1920x800" alt="" />
        </div>
        <div className="card-content">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h2 className="is-size-6 has-text-weight-semibold">
              {launchpad.site_name_long}
            </h2>
            <span
              className="tag is-success is-large"
              style={{ marginLeft: "1rem" }}
            >
              Ativo
            </span>
          </div>
          <p className="is-size-7" style={{ marginTop: "1rem" }}>
            <strong>{launchpad.location.name}</strong>,{" "}
            {launchpad.location.region}
          </p>
          <a
            href={`http://maps.google.com/maps?q=${
              launchpad.location.latitude
            },${launchpad.location.longitude}&t=k`}
            className="button is-primary" style={{ marginTop: "1rem" }}
          ><span class="icon">
          <i className="fas fa-map-marked-alt"></i>
          </span><span>Ver no mapa</span>
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadListItem;
