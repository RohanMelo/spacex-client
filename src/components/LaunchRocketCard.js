import React from "react";

const itemStyle = {
  backgroundColor: "#f3f3f3",
  padding: "1rem",
  borderRadius: "5px"
};

const LaunchRocketCard = ({ rocket }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://placehold.it/1280x600" alt="" />
      </div>
      <div className="card-content">
        <h4 className="is-size-5" style={{ marginBottom: "1rem" }}>
          {rocket.rocket_name}
        </h4>
        <div>
          <div className="level">
            <div className="level-left">
              <p className="is-size-7">
                <strong>Primeiro Estágio</strong>
              </p>
            </div>
          </div>
          {rocket.first_stage.cores.map(core => (
            <div style={itemStyle}>
              <p className="is-size-7">
                Bloco <strong>{core.block}</strong>, voo no.{" "}
                <strong>{core.flight}</strong>
              </p>
              <div className="level">
                <div className="level-left">
                  <p className="is-size-7">
                    Núcleo no. <strong>{core.core_serial}</strong>
                  </p>
                </div>
                <div className="level-right">
                  <span className="tag is-small is-success">Aterrisou</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="level" style={{ marginTop: "1rem" }}>
            <div className="level-left">
              <p className="is-size-7">
                <strong>Segundo Estágio</strong>
              </p>
            </div>
            <div className="level-right">
              <p className="is-size-7">
                Bloco <strong>{rocket.second_stage.block}</strong>
              </p>
            </div>
          </div>
          {rocket.second_stage.payloads.map(payload => (
            <div style={itemStyle}>
              <div className="level">
                <div className="level-left">
                  <p className="is-size-7">
                    <strong>{payload.payload_id}</strong>
                  </p>
                </div>
                <div className="level-right">
                  <p className="is-size-7">{payload.payload_type}</p>
                </div>
              </div>
              <ul className="is-size-7">
                <li>
                  <strong>Nacionalidade: </strong>
                  {payload.nationality}
                </li>
                <li>
                  <strong>Cliente(s): </strong>
                  {payload.customers.map(customer => `${customer} `)}
                </li>
                <li>
                  <strong>Fabricante: </strong>
                  {payload.manufacturer}
                </li>
                <li>
                  <strong>Massa: </strong>
                  {payload.payload_mass_kg} Kg
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaunchRocketCard;
