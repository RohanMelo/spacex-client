import React from "react";

import LaunchRocketCard from "../components/LaunchRocketCard";
import LaunchLaunchpadCard from "../components/LaunchLaunchpadCard";
import LaunchLinksCard from "../components/LaunchLinksCard";
import YouTubeEmbed from "../components/YouTubeEmbed";
import axios from 'axios';
// import launchData from "../mockdata/LAUNCH.json"

class Launch extends React.Component {
  state = {
    launchData: {},
    loading: true
  }
  componentDidMount() {
    const flight_number = this.props.match.params.id;
    axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then(res => {
        this.setState({
          launchData: res.data,
          loading: false
        }, error => {
          console.log(error)
        });
      })
  };

  render() {
    const launchData = this.state.launchData;
    
  if (this.state.loading) return <h1>loading...</h1>

  else return (
    <section>
      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="level">
          <div className="level-left">
            <div className="div">
              <h1 className="title">{launchData.mission_name}</h1>
              <h2 className="subtitle">{launchData.launch_date_utc}</h2>
            </div>
          </div>
          <div className="level-right">
            <span className="tag is-success is-large">Bem-sucedido</span>
          </div>
        </div>
        <p className="is-size-5">{launchData.details}</p>
      </div>
      <YouTubeEmbed />
      <div className="container">
        <div className="columns" style={{ marginTop: "2rem" }}>
          <div className="column">
            <h3 className="subtitle">Foguete</h3>
            <LaunchRocketCard rocket={launchData.rocket} />
          </div>
          <div className="column">
            <h3 className="subtitle">Base de Lançamento</h3>
            <LaunchLaunchpadCard launchpad={launchData.launch_site} />
            <h3 className="subtitle" style={{ marginTop: "1rem" }}>
              Links
            </h3>
            <LaunchLinksCard links={launchData.links} />
          </div>
        </div>
      </div>
    </section>
  );
};
}

export default Launch;
