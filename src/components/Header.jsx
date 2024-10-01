import styled from "styled-components"

export default function HeaderSite() {
    return (
        <Header>
            <p>TrackIt</p>
            <img src="" alt="" />
        </Header>
    )
}

const Header = styled.header` 
    width: 100%;    
    top: 0;
    position: fixed;
    background-color: #126BA5;
    box-shadow: 1px 5px 5px #0000002b;
    p {
        font-size: 70px;
        font-family: 'Qwitcher Grypen';
        color: white;
    }
`