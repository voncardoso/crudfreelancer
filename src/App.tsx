import { BrowserRouter, Route , Switch, Link } from "react-router-dom";
import { cadastro } from './pages/cadastro';
import { login } from './pages/login';
import { listaCadastro } from './pages/listaCadastro';

import {GLobalStyle} from './styles/global'

export function App() {
  return ( 
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login}/>
      <Route path="/cadastro" exact component={cadastro}/>
      <Route path="/listaCadastro" exact component={listaCadastro}/>
    </Switch>
    <GLobalStyle/>
    </BrowserRouter>
  );
}


