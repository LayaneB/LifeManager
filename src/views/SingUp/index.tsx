import React, {useState, useCallback, FormEvent} from "react";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import {Container} from "./style";
import {api} from "../../services/api";
import Loader from "../../components/Loader";
import NavPurple from "../../components/Nav-purple";

interface IData{
    name: string;
    email:string;
    password:string;
}

const SignUp: React.FC = () =>{
    const [data, setData] = useState<IData>({} as IData);
    const [load, setLoad] = useState(false);

    const history = useHistory();

    const handleSubmit = useCallback( (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        api.post('users', data).then(
            response => {
                setLoad(false)
                toast.success('Cadastro realizado com sucesso!', {
                    hideProgressBar: false,
                    onClose: () =>  history.push('/signIn')
                })
            }
        ).catch(e => {
            toast.error('Algo deu errado, tente novamente!')
            setLoad(false)
        })
    },[data, history])

    if(load){
        return (
           <Loader />
        )
    }
    return (
        <>
            <NavPurple />
            <Container>
                <div className="card">
                    <h4>Cadastre-se</h4>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Informe seu nome" 
                            onChange={e => setData({...data, name: e.target.value})}
                        />
                        <input 
                            type="text" 
                            placeholder="Informe seu email" 
                            onChange={e => setData({...data, email: e.target.value})}
                        />
                        <input 
                            type="password" 
                            placeholder="Informe sua senha" 
                            onChange={e => setData({...data, password: e.target.value})}
                        />
                        <input 
                            type="submit" 
                            value="Cadastrar" 
                        />
                    </form>
                    <div className="link">
                        <Link to="/signIn">Já possuo cadastro</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp;