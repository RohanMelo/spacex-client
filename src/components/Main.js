import React, { Component } from "react";

import MainHero from './MainHero';
import axios from 'axios';
import launchData from '../mockdata/LAUNCH.json'

class Main extends Component {
  state = {
    apiLaunch: {},
    loading: true,
  };
  
  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches/latest')
      .then(res => {
        this.setState({
          apiLaunch: res.data,
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
        <MainHero launch={this.state.apiLaunch} />
        <MainHero launch={launchData} latest />
      </section>
    );
  };
}
export default Main;
