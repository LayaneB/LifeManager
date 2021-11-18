import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Loader from '../../components/Loader';
import {api} from '../../services/api';

import { useDispatch } from "react-redux";
import addNewUser from '../../store/modules/user/action';

import {Container} from "./style";

interface ICollaborator{
    id: number;
    name: string;
    email: string;
    photo: {
        path: string;
    }
}

const Dash: React.FC = () => {
    const [data, setData] = useState<ICollaborator[]>([]);
    const [isLoad, setIsLoad] = useState(false);
    const token = localStorage.getItem ('@gamaServiceToken')?.replace(/["]/g,'')

    const dispach = useDispatch();

    useEffect ( () => {
        api.get('collaborator', {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }).then (response => {
            setIsLoad (true)
            setData (response.data)
        }).finally( () => setIsLoad(false));
    }, [token])

    useEffect (() => {
        data?.map(user => dispach((addNewUser(user))) )
    }, [data, dispach])

    if (isLoad){
        return <Loader />
    }

    return (
        <Container>
            <div className = "wrapper">
                <h1>Dashboard</h1>
                <div>
                    { data?.map( el => (
                        <div key ={el.id} className= "card">
                            {/* <img src={`https://sistemadeagendamento-san5v.ondigitalocean.app/tmp/uploads/${el.photo.path}`} alt=" " width="100px" height="100px" /> */}
                            <img src="data:image/jpeg;base64,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" alt=" " width="100px" height="100px" />
                            <div className = "content-information">
                                <p>Nome: {el.name}</p>
                                <p>Email: {el.email}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <Link to="/">Home
                </Link>
            </div>
        </Container>
    )
}

export default Dash;