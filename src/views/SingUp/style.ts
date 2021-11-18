import styled from "styled-components";

export const Container =styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100vh;
    background-color: #8c52e3;
    /* img{
        border: 10px solid;
        margin:0;
        padding: 0;
    } */
    .card{
        display:grid;
        background-color: #f9f9f9;
        max-width: 300px;
        border-radius: 22px;
        padding: 22px;
        text-align:center;
        justify-content: center;

        h4{
            font-family: 'Reboto', sans-serif;
            text-align: center;
        }
        form{
            input{
                width: 100%;
                height: 32px;
                text-align: center;
                margin: 10px 0 0 0;
                border-radius: 22px;
                border:1px solid #e2e2e2;
            }
            input[type="submit"]{
                cursor: pointer;
                border:none;
                background:#68de5a;
                padding: 5px;
                border-radius: 12px;
                transition: 0.6s;
                /* color: #8c52e3; */
                font-weight: bold;
                
                &:hover{
                    background: #8c52e3;
                    color:#f9f9f9;
                }
            }
        }
        a{
            text-decoration: none;
            color: #8c52e3;
            &:hover{
                color:#68de5a ;
            }
        }
        .link{
            padding-top: 5px;
        }
    }
`