import styled from "styled-components"; 

export const ContainerCadastro = styled.section`
    max-height: 500px;
    max-width: 1000px;
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: var(--shape);
        form {
           width: 500px;
           margin: 0 auto;

           h1{
               margin-left: 50px;
               margin-bottom: 40px;
               color: #3751FE;
           }
           input{
            
               display: block;
               margin: 0 auto;
               max-width: 400px;
               width: 400px;
               height: 40px;
               max-height: 40px;
               margin-bottom: 20px;
               color: #3751FE;
               padding-left: 5px;
               border: 2px solid #969cb3;
               border-radius: 5px;
               
               & + input{
                    margin-bottom: 40px;
               }
           }

           input:focus {
            outline: none !important;
            border: 2px solid #3751FE;
            border-radius: 5px;
            }

           button{
            font-size: 1rem;
            color: #fff;
            background: #3751FE;
            border: 0;
            padding: 0 2rem;
            border-radius: 0.25rem;
            height: 2.5rem;
            margin-left: 50px;
            
            transition:  filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
           }

           a {
            text-decoration: none;
            font-size: 1rem;
            color: #3751FE;
           
            border: 2px solid #3751FE;
            padding: 0.4rem 1rem;
            border-radius: 0.25rem;
            
            margin-left: 20px;
            transition:  filter 0.2s;

           }
        }   

        img {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 500px;
            background: #F8F8F8;
        }
`;
