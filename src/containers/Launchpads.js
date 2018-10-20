import React, { Component } from "react";

import fetchFromApi from "../api/api";

import LaunchpadListItem from "../components/LaunchpadListItem";

class Launchpads extends Component {
  
  state = {
    launchpadsData: {},
    loading: true
  };

  componentDidMount() {
    fetchFromApi("launchpads").then(res => {
      this.setState(
        {
          launchpadsData: res.data,
          loading: false
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  render() {
    const launchpadsData = this.state.launchpadsData;

    if (this.state.loading) return <h1>loading...</h1>;
    else
      return (
        <section>
          <div className="container" style={{ marginTop: "3rem" }}>
            <h1 className="title">Plataformas de Lançamento</h1>
            <h2 className="subtitle">Todas as plataformas</h2>
            <hr />
            <div className="columns is-multiline">
              {launchpadsData.map(launchpad => (
                <LaunchpadListItem key={launchpad.id} launchpad={launchpad} />
              ))}
            </div>
          </div>
        </section>
      );
  }
}

export default Launchpads;
