import Modal from 'react-modal';
import {  useEffect,  useState } from "react";
import firebaseDb from "../../firebase";
import {ContainerList, Container} from './style';

import { AiOutlineDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import closeImg from '../../assets/close.svg';





interface Idtype{
    email:string,
    passaword: string,
}

Modal.setAppElement('#root');

export function ContactForm(){
    const [email, SetEmail] = useState('');
    const [passaword, setPassaword] = useState('');
    const [contactObjects, setContactObjects] = useState<Idtype[]>([]);
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


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

    function updateList(id: string){
        const data = {
            email,
            passaword,
        }
        console.log(id);
        return (firebaseDb.child(`contacts/${id}`).update(data));
    }

    function onDelete(id: string){
        if(window.confirm('Are you sure to delete this record?')){
            debugger
            firebaseDb.child(`contacts/${id}`).remove()
        }
    }

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
  
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    return(
        <ContainerList>
            <a href="/" className="loginVoltar">Login</a>
            <table>
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

                                <tr  key={id}>
                                    <td 
                                        className="trWith-1">
                                        {contactObjects[id].email}
                                    </td>
                                    <td className="trWith-2">{contactObjects[id].passaword}</td>
    
                                    <button onClick={() => onDelete(id)}>
                                        <AiOutlineDelete/>
                                    </button>
                                    <button className="update"onClick={handleOpenNewTransactionModal} >
                                        <GrUpdate/>
                                    </button>
                                    

                                        <Modal
                                            isOpen={isNewTransactionModalOpen}
                                            onRequestClose={handleCloseNewTransactionModal}
                                            overlayClassName="react-modal-overlay"
                                            className="react-modal-content"
                                        >
                                            <Container >
                                                    
                                                    <h2>Atulizar cadastro</h2>
                                                    <input key={id}
                                                        placeholder="Email" 
                                                        value={email}
                                                        onChange={event => SetEmail(event.target.value)}
                                                    />
                                                        <input key={id}
                                                        placeholder="senha"
                                                        type="password"
                                                        value={passaword}
                                                        onChange={event => setPassaword(event.target.value)}
                                                    />

                                                    <button type="submit" onClick={() => updateList(id)}>
                                                        Atualizar
                                                    </button>
                                            </Container>
                                        </Modal>
                                </tr>
                            
                            )
                           
                        })
                    }
                </tbody>
            </table>
            
            
        </ContainerList>
    );
}