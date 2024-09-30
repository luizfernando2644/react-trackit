import styled from "styled-components";
import Logo from "../../assets/trackit-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function fazerLogin(e) {
        e.preventDefault();
        const signIn = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const usuario = { email, password };

        const promise = axios.post(signIn, usuario);
        promise.then(res => navigate("/hoje"));
        promise.catch(err => console.log(err.response.data));
    }

    return (
        <ContentContainer>
            <LogoSite>
                <img src={Logo} alt="" />
            </LogoSite>
            <Form onSubmit={fazerLogin}>
                <input type="email" id="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" id="" placeholder="senha" required value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Entrar</button>
            </Form>
            <Link to={"/sign-up"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    a {
        font-size: 21px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        color: #52b6ff;
    }
`

const LogoSite = styled.div`
    img {   
        width: 250px;
    }
`

const Form = styled.form`
    width: 90vw;
    input {
        width: 95%;
    }
    button {
        width: 100%;
        height: 55px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
        background-color: #52b6ff;
    }
`