import React, { Component } from "react";
import LaunchListItem from "./LaunchListItem";

// Lista com 19 lançamentos
// import launchList from "../mockdata/LAUNCHES";
import axios from 'axios';

class Launches extends Component {
  state = {
    launchList: {},
    loading: true
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(res => {
        this.setState({
          launchList: res.data,
          loading: false
        }, error => {
          console.log(error)
        });
      })
  };

  render() {
    if (this.state.loading) return <h1>loading...</h1>
    else return (
    <section>
      <div className="container" style={{ marginTop: "3rem" }}>
        <h1 className="title">Lançamentos</h1>
        <h2 className="subtitle">Todos os lançamentos</h2>
        <hr />
        {/* TODO: Criar lista com [react-masonry-component](https://github.com/eiriklv/react-masonry-component) */}
        <div className="columns is-multiline">
          {this.state.launchList.map(item => (
            <LaunchListItem launch={item} key={item.flight_number} />
          ))}
        </div>
        {/* TODO: Paginação */}
      </div>
    </section>
  );
          }
};


export default Launches;
