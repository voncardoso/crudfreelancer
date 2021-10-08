import { database } from "firebase";
import { Children, FormEvent, useEffect, useRef, useState } from "react";
import firebaseDb from "../../firebase";




interface Idtype{
    email:string,
    passaword: string,
}


export function ContactForm(){
  //  const [email, SetEmail] = useState('');
   // const [passaword, setPassaword] = useState('');
    const [contactObjects, setContactObjects] = useState<Idtype[]>([]);
   
   // function handleFormSubmit(event: FormEvent){
    //    event.preventDefault();
    //    const data = {
     //       email,
     //       passaword,
      //  }

      //  firebaseDb.child('contacts').push(data);
     //  }

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

    function onDelete(id: string){
        if(window.confirm('Are you sure to delete this record?')){
            debugger
            firebaseDb.child(`contacts/${id}`).remove()
        }
    }


    return(
        <>
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

                            <button onClick={() => onDelete(id)}>
                                delete
                            </button>
                        </tr>
                        )
                    })
                }
            </tbody>
        </>
    );
}