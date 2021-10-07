import React from 'react';


import { BrowserRouter, Route , Switch } from "react-router-dom";
import { cadastro } from './pages/cadastro';
import { login } from './pages/login';
import { listaCadastro } from './pages/listaCadastro';

export function App() {
  return ( 
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login}/>
      <Route path="/cadastro" exact component={cadastro}/>
      <Route path="/listaCadastro" exact component={listaCadastro}/>
    </Switch>
    </BrowserRouter>
  );
}


