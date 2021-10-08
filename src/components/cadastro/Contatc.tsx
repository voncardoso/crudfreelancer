
import {  FormEvent,  useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import firebaseDb from "../../firebase";

import {ContainerCadastro} from './style';
import LogoCadastro from '../../assets/Cadastro.svg';





export function Contact(){
    const [email, SetEmail] = useState('');
    const [passaword, setPassaword] = useState('');

    const history = useHistory();

    function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        const data = {
            email,
            passaword,
        }

        firebaseDb.child('contacts').push(data);

        window.confirm('Cadastro Realizado com Sucesso') 
        return history.push("/")
       }
       
    return(
        <ContainerCadastro>
        
        <form onSubmit={handleFormSubmit}>
        <h1>Cadastrar Usuario</h1>
            <input 
                placeholder="Email" 
                value={email}
                onChange={event => SetEmail(event.target.value)}
            />
            <input  
                placeholder="Senha"
                value={passaword}
                onChange={event => setPassaword(event.target.value)}
             />
            <button type="submit">
                Cadatrar
            </button>
        </form>
        <img src={LogoCadastro} alt="Logo Cadastro" />
        </ContainerCadastro>
        
    );
}