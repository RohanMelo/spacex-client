import React, { Component } from "react";

import MainHero from './MainHero';
import axios from 'axios';
// import launchData from '../mockdata/LAUNCH.json'

class Main extends Component {
  state = {
    apiLaunch: []
  };
  
  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches/latest')
      .then(res => {
        this.setState({
          apiLaunch: res.data
        }).catch((e) => {
          console.error(e);
        });
      })
  };
  
  render() {
    return (
      <section>
        <MainHero launch={this.state.apiLaunch} />
        <MainHero launch={this.state.apiLaunch} latest />
      </section>
    );
  };
}
export default Main;
