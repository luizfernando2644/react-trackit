import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

export default function Habitos() {
    return (
        <div>
            <Header />
            <Content>
                <p>Meus Hábitos</p>
                <button>+</button>
                <HabitsContainer>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </HabitsContainer>
            </Content>
            <Footer />
        </div>
    )
}

const Content = styled.div`
    height: 80vh;
    margin-top: 85px;
    background-color: #F2F2F2;
`

const HabitsContainer = styled.div`

`