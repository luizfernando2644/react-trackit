import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import Logo from "../../assets/trackit-logo.png";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    function fazerCadastro(e) {
        e.preventDefault();
        const signIn = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const usuario = { email, password, name, image };
        
        const promise = axios.post(signIn, usuario);
        promise.then(res => navigate("/"));
        promise.catch(err => console.log(err.response.data));
    }

    return (
        <ContentContainer>
            <LogoSite>
                <img src={Logo} alt="" />
            </LogoSite>
            <Form onSubmit={fazerCadastro}>
                <input type="email" id="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" id="senha" placeholder="senha" required value={password} onChange={e => setPassword(e.target.value)} />
                <input type="text" id="nome" placeholder="nome" required value={name} onChange={e => setName(e.target.value)} />
                <input type="text" id="foto" placeholder="foto" required value={image} onChange={e => setImage(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça Login!</p>
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