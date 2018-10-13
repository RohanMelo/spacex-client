import React from "react";
import LaunchListItem from "./LaunchListItem";

// Lista com 19 lançamentos
import launchList from "../mockdata/LAUNCHES";

const Launches = () => {
  return (
    <section>
      <div className="container" style={{ marginTop: "3rem" }}>
        <h1 className="title">Lançamentos</h1>
        <h2 className="subtitle">Todos os lançamentos</h2>
        <hr />
        {/* TODO: Criar lista com [react-masonry-component](https://github.com/eiriklv/react-masonry-component) */}
        <div className="columns is-multiline">
          {launchList.map(item => (
            <LaunchListItem launch={item} key={item.flight_number} />
          ))}
        </div>
        {/* TODO: Paginação */}
      </div>
    </section>
  );
};

export default Launches;
