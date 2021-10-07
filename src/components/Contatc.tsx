import { ContactForm } from "./ContactForm";
import { Children, FormEvent, useEffect, useRef, useState } from "react";
import firebaseDb from "../firebase";
import './styles.css';



export function Contact(){
    const [email, SetEmail] = useState('');
    const [passaword, setPassaword] = useState('');

    function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        const data = {
            email,
            passaword,
        }

        firebaseDb.child('contacts').push(data);
       }
    return(
        <>
        <h1>Cadastrar Usuario</h1>
        
        <form onSubmit={handleFormSubmit}>
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
        
        </>
        
    );
}