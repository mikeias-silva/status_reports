import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainMdk from './pages/mdks/main';
import DetalhesMdk from './pages/mdks/detalhes'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/mdks" component={MainMdk}/>
            <Route exact path ="/mdks/:id" component={DetalhesMdk}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;