import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterSite() {
    const percentage = 0;
    return (
        <Footer>
            <Link to={"/habits"}>
                <p>Hábitos</p>
            </Link>
            <Link to={"/hoje"}>
                <div>
                    <CircularProgressbar
                        value={percentage}
                        text={`Hoje`}
                        background
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#FFF",
                            pathColor: "#FFF",
                            trailColor: "transparent"
                        })}
                    />
                </div>
            </Link>
            <Link to={"/historico"}>
                <p>Histórico</p>
            </Link>
        </Footer>
    )
}

const Footer = styled.footer`
    width: 100%;
    height: 10%;
    bottom: 0;
    position: fixed; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    p {
        color:#52B6FF;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 20px;
        font-weight: bold;
    }
    div {
        width: 100px;
        height: 150px;
    }
    a {
        text-decoration: none;
    }
`