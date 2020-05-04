import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainMdk from './pages/mdks/main';
import DetalhesMdk from './pages/mdks/detalhes'
import CriarMDK from './pages/mdks/criar'
import Rodape from './components/footer/footer.js'
import EditarMDK from './pages/mdks/editar'
import DeletarMDK from './pages/mdks/deletar'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/mdks" component={MainMdk}/>
            <Route exact path ="/mdks/:id" component={DetalhesMdk}/>
            <Route exact path ="/criarMDK" component={CriarMDK}/>
            <Route exact path ="/mdks" component={Rodape}/>

            <Route exact path ="/editarMDK/:id" component={EditarMDK}/>
            <Route exact path ="/DeletarMDK/:id" component={DeletarMDK}/>
            
        </Switch>
    </BrowserRouter>
)

export default Routes;