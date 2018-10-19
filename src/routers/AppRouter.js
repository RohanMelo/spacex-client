import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from '../components/Footer';

import Main from "../containers/Main";
import About from "../containers/About";
import Launches from "../containers/Launches";
import Launch from "../containers/Launch";
import Launchpads from '../containers/Launchpads';
import Launchpad from '../containers/Launchpad';
import Missions from "../containers/Missions";
import Mission from "../containers/Mission";
import Rockets from "../containers/Rockets";
import Rocket from "../containers/Rocket";
import NotFoundPage from "../containers/NotFoundPage";

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
