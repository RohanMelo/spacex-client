import React, { Component } from "react";

import fetchFromApi from "../api/api";

import MainHero from "../components/MainHero";

class Main extends Component {
  state = {
    apiLaunch: {},
    loading: true
  };

  componentDidMount() {
    fetchFromApi("launches/latest").then(res => {
      this.setState(
        {
          apiLaunch: res.data,
          loading: false
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  render() {
    if (this.state.loading) return <h1>loading...</h1>;
    else
      return (
        <section>
          <MainHero launch={this.state.apiLaunch} />
          <MainHero launch={this.state.apiLaunch} latest />
        </section>
      );
  }
}
export default Main;
