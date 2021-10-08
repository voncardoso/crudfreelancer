import styled from "styled-components"; 
import {darken, transparentize} from 'polished';

export const ContainerList = styled.div`
       margin-top: 4rem;
        max-width: 400px;
        display: flex;
        margin: 100px auto;
        position: relative;
        justify-content: center;
        align-items: center;
        
        .loginVoltar{
         position: relative;
         margin-top: 250px;
         padding: 20px;
         right: 350px;
         text-decoration: none;
         color: #3751FE;
        }
        table {
            width: 100%;
            border-spacing: 0 0.5rem;
            border-radius: 1rem;


            tr {
                color: var(--text-body);
                font-weight: 400;
                padding: 1rem 1.5rem;
                text-align: left;
                line-height: 1.5rem;
                border-radius: 1rem;
            }

            .trWith-1{
                border-radius: 0.5rem 0 0 0.5rem;
            }

            .trWith-2{
                border-radius: 0 0.5rem 0.5rem 0;
            }

            td {
                padding: 1rem 1rem;
                width: 200px;
                border: 0;
                color: var(--text-body);
                background: var(--shape);
                font-size: 1.3rem;
            }

            button {
                background: var(--red);
                margin-left: 10px;
                display: flex;
                margin-top: 4px;
                padding: 0.5rem;
                border: none;

            }

            .update{
                background: #3751FE;
            }
        }
`;

export const Container = styled.form`
    width: 400px;
    margin: 0 auto;
    h2 {
        color: #3751FE;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0%.25rem;
        margin: 10px auto;
        color: #3751FE;
        border: 1px solid var(--text-body);
        background: #e7e9ee;
        border-radius: 5px;
        font-weight: 400;
        font-size: 1rem;
        
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
            margin: 10px auto;
            
            transition:  filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
           }
`;

