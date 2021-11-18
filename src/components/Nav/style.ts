import styled from "styled-components";

export const NavBar =styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* background-color: #8c52e3; */
    height: 10vh;

    .nav-links{
        a{
        margin:12px;
        text-decoration: none;
        font-weight: bold;
        color:#8c52e3;
        font-family: 'Reboto', sans-serif;
        font-size: 20px;
        transition: 0.6s;
        &:hover{
            color:#68de5a;
        }
    }
    }
    

    img{
        max-width: 120px;
        height: auto;
        margin: 15px;
    }

`