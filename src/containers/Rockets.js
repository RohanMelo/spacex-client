import React, { Component } from "react";
import axios from 'axios';

import RocketListItem from '../components/RocketListItem'

// import rocketList from '../mockdata/ROCKETS.json';

class Rockets extends Component { 
  state = {
    rocketList: {},
    loading: true
  };

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/rockets')
      .then(res => {
        this.setState({
          rocketList: res.data,
          loading: false
        }, error => {
          console.log(error)
        });
      })
  };

  render() {
    const rocketList = this.state.rocketList;

    if (this.state.loading) return <h1>loading...</h1>
    else return (
    <section>
    <div className="container" style={{ marginTop: "3rem" }}>
      <h1 className="title">Foguetes</h1>
      <h2 className="subtitle">Todos os foguetes</h2>
      <hr />
      {/* TODO: Criar lista com [react-masonry-component](https://github.com/eiriklv/react-masonry-component) */}
      <div className="columns is-multiline">
        {rocketList.map(item => (
          <RocketListItem rocket={item} key={item.id} />
        ))}
      </div>
      {/* TODO: Paginação */}
    </div>
  </section>
  );
  }
  }


export default Rockets;
