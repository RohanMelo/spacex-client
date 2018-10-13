import React, { Component } from "react";

export default class Countdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2 className="is-size-1">T- {this.props.launchDate}</h2>;
  }
}
