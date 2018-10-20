import React, { Component } from "react";

import fetchFromApi from "../api/api";

import MissionListItem from "../components/MissionListItem";

class Missions extends Component {
  state = {
    missionList: {},
    loading: true
  };

  componentDidMount() {
    fetchFromApi("missions").then(res => {
      this.setState(
        {
          missionList: res.data,
          loading: false
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  render() {
    const missionList = this.state.missionList;

    if (this.state.loading) return <h1>loading...</h1>;
    else
      return (
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
  }
}

export default Missions;
