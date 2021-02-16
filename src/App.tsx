import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { NavBar } from './components/utils/NavBar';

import { Home } from './pages/Home';
import { Projects } from './components/projects/Projects';

const App: React.FC = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default App;
