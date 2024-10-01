import dayjs from "dayjs";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Hoje() {
    const agora = dayjs();
    const dataFormatada = agora.format('DD/MM');
    const dayNumber = agora.day();
    function getDayOfWeek(dayNumber) {
        switch (dayNumber) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
            default:
                return 'Dia inválido';
        }
    }

    const nomeDoDia = getDayOfWeek(dayNumber);

    return (
        <ContentContainer>
            <Header />
            <Day>
                <p>{nomeDoDia}, {dataFormatada}</p>
            </Day>
            <Footer />
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F2F2;
`

const Day = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    p {
        font-size: 30px;
        color: #126BA5;
    }
`