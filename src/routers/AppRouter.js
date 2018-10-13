import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import About from '../components/About';

import Launches from '../components/Launches';
import LaunchesLatest from '../components/LaunchesLatest';
import LaunchesNext from '../components/LaunchesNext';
import LaunchesId from '../components/LaunchesId';
import Missions from '../components/Missions';
import MissionsId from '../components/MissionsId';
import Rockets from '../components/Rockets';
import RocketsId from '../components/RocketsId';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/launches" component={Launches} exact={true} />
                <Route path="/launches/latest" component={LaunchesLatest} />
                <Route path="/launches/next" component={LaunchesNext} />
                <Route path="/launches/:id" component={LaunchesId} />
                <Route path="/missions" component={Missions} exact={true} />
                <Route path="/missions/:id" component={MissionsId} />
                <Route path="/rockets" component={Rockets} exact={true} />
                <Route path="/rockets/:id" component={RocketsId} />
                <Route component={NotFoundPage} />
            
            </Switch>

        </div>
    </BrowserRouter>
);

export default AppRouter;