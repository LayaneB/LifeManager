import React from "react";
import { NavBar } from "./style";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { IGlobalState } from "../../store/modules/user/type"; 


import LogoLM from '../../assets/img/logo.png';



const NavPurple: React.FC = () => {
    const state = useSelector((state:IGlobalState) => state.users)
    return (
        <div>
            <NavBar> 
                <img src = {LogoLM} alt = "Logo LifeManager" width="110px" />
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/services">Serviços</Link>
                    <Link to="/signUp">Cadastre-se</Link>
                    <Link to="/signIn">Login</Link>
                    {state.length >= 1 && (
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    )}
                </div>
            </NavBar>  
            <hr/>  
        </div>
    )
}

export default NavPurple;