import React from 'react';
import { Contact } from './components/Contatc';
import { Login } from './components/Login';
import { BrowserRouter, Route , Switch } from "react-router-dom";

export function App() {
  return ( 
    <BrowserRouter>

    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </BrowserRouter>
  );
}


