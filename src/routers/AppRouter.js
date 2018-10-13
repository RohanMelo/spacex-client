import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from '../components/Footer';

import Main from "../components/Main";
import About from "../components/About";
import Launches from "../components/Launches";
import Launch from "../components/Launch";
import Launchpads from '../components/Launchpads';
import Launchpad from '../components/Launchpad';
import Missions from "../components/Missions";
import Mission from "../components/Mission";
import Rockets from "../components/Rockets";
import Rocket from "../components/Rocket";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/launches" component={Launches} exact={true} />
          <Route path="/launches/latest" render={(props) => <Launch latest />} />
          <Route path="/launches/next" render={(props) => <Launch next />} />
          <Route path="/launches/:id" component={Launch} />
          <Route path="/launchpads/" component={Launchpads} />
          <Route path="/launchpads/:id" component={Launchpad} />          
          <Route path="/missions" component={Missions} exact={true} />
          <Route path="/missions/:id" component={Mission} />
          <Route path="/rockets" component={Rockets} exact={true} />
          <Route path="/rockets/:id" component={Rocket} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
