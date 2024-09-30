import styled from "styled-components";
import Logo from "../../assets/trackit-logo.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
        <ContentContainer>
            <LogoSite>
                <img src={Logo} alt="" />
            </LogoSite>
            <Form>
                <input type="email" id="email" placeholder="email" required />
                <input type="password" id="senha" placeholder="senha" required />
                <input type="text" id="nome" placeholder="nome" required/>
                <input type="text" id="foto" placeholder="foto" required/>
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