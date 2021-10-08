import { error } from "console";
import { useState, useEffect, FormEvent } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history"
import firebaseDb from "../firebase";

interface IdLogin{
    email:string,
    passaword: string,
}


export function Login(){
    const [loginObjects, setloginObjects] = useState<IdLogin[]>([]);
    const [emailLogin, SetEmailLogin] = useState('');
    const [passawordLogin, setPassawordLogin] = useState('');

    let history = useHistory();
     
      

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot?.val() != null)
            setloginObjects({
                    ...snapshot.val()
                })
            else
            setloginObjects([])

        })
    }, [])


    function authentication(){
        const data = {
            emailLogin,
            passawordLogin,
        }

        Object.keys(loginObjects).map((id: any) => {
               if(loginObjects[id].email === data.emailLogin && loginObjects[id].passaword === data.passawordLogin){
                    //return <Redirect to='/listaCadastro'/>
                   return history.push("/listaCadastro");
               }else{
                return window.confirm('Email ou senha incorreta')
               }
        })
    }

    return(
        <form onSubmit={authentication}>
        <input 
         placeholder="Email" 
         value={emailLogin}
         onChange={event => SetEmailLogin(event.target.value)}
         />
        <input 
            placeholder="senha"
            value={passawordLogin}
            onChange={event => setPassawordLogin(event.target.value)}
        />
            <button >
                Login
            </button>
    </form>
    )
   }