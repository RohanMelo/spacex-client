import React from "react";

import MainHero from './MainHero';

import launchData from "../mockdata/LAUNCH.json";

const Main = () => {
  return (
    <section>
      <MainHero launch={launchData} />
      <MainHero launch={launchData} latest />
    </section>
  );
};

export default Main;
