import { ContactForm } from "./ContactForm";
import firebaseDb from "../firebase"

export function Contact(){

    return(
        <>
        <h1>Cadastrar Usuario</h1>
        <ContactForm />
        </>
        
    );
}