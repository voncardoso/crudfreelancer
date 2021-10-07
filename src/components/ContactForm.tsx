import { database } from "firebase";
import { Children, FormEvent, useEffect, useRef, useState } from "react";
import firebaseDb from "../firebase";
import './styles.css';



interface Idtype{
    email:string,
    passaword: string,

}


export function ContactForm(){
    const [email, SetEmail] = useState('');
    const [passaword, setPassaword] = useState('');
    const [contactObjects, setContactObjects] = useState<Idtype[]>([]);
   
    function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        const data= {
            email,
            passaword,
        }

        firebaseDb.child('contacts').push(data);
       }

       useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot?.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects([])

        })
    }, [])// similar to componentDidMount


    return(
        <>
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
            <thead >
                <tr>
                    <th>Email</th>
                    <th>Password</th>

                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(contactObjects).map((id: any) => {
                        return (
                            <tr key={id}>
                            <td>{contactObjects[id].email}</td>
                            <td>{contactObjects[id].passaword}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </form>
        </>
    );
}