import React, {useState, useCallback, FormEvent} from "react";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import {Container} from "./style";
import {api} from "../../services/api";
import Loader from "../../components/Loader";
import NavPurple from "../../components/Nav-purple";

interface IData{
    email:string;
    password:string;
}

const SignIn: React.FC = () =>{
    const [data, setData] = useState<IData>({} as IData);
    const [load, setLoad] = useState(false);

    const history = useHistory();

    const handleSubmit = useCallback( (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        api.post('session', data).then(
            response => {
                const sessionToken = JSON.stringify(response.data.token)
                localStorage.setItem('@gamaServiceToken',sessionToken)
                setLoad(false)
                toast.success('Login realizado com sucesso!', {
                    hideProgressBar: false,
                    onClose: () =>  history.push('/dashboard')
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
                    <h4>Login</h4>
                    <form onSubmit={handleSubmit}>
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
                            value="Logar-se" 
                        />
                        <br/>
                    </form>
                    <div className="link">
                        <Link to="/signUp">Cadastrar-se</Link>
                    </div>
                    
                </div>
            </Container>
        </>
    )
}

export default SignIn;