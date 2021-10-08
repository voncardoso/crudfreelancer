import styled from 'styled-components';

export const ContainerLogin = styled.section`
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
           input{
            
               display: block;
               margin: 0 auto;
               max-width: 400px;
               width: 400px;
               height: 40px;
               max-height: 40px;
               margin-bottom: 20px;
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
        }

        img {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 500px;
           background: #F8F8F8;
        }
`;




