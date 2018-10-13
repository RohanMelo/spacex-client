import React from "react";
import MissionListItem from "./MissionListItem";

import missionList from "../mockdata/MISSIONS.json";

const Missions = () => (
  <section>
    <div className="container" style={{ marginTop: "3rem" }}>
      <h1 className="title">Missões</h1>
      <h2 className="subtitle">Todas as missões</h2>
      <hr />
      {/* TODO: Criar lista com [react-masonry-component](https://github.com/eiriklv/react-masonry-component) */}
      <div className="columns is-multiline">
        {missionList.map(item => (
          <MissionListItem mission={item} key={item.id} />
        ))}
      </div>
      {/* TODO: Paginação */}
    </div>
  </section>
);

export default Missions;
