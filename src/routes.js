import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/TeamPage';
import TutorialPage from './pages/TutorialPage';

export default (
    <Route>
        <Route path="home" component={HomePage}/>
    </Route>
)