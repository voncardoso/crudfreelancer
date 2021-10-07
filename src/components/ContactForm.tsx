import { FormEvent, useState } from "react";
import firebaseDb from "../firebase";



export function ContactForm(){
    var [email, SetEmail] = useState('');
    var [passaword, setPassaword] = useState('');

       function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        const data = {
            email,
            passaword,
        }

        firebaseDb.child('contacts').push(data);
       }
    return(
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
    );
}