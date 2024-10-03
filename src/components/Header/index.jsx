import { useNavigate, useLocation } from "react-router-dom";
import { Container, Avatar } from "./style";
import logo from "../../assets/img/logo-mini.svg";
import useAuth from "../../hooks/useAuth";
import { pathsWithoutHeaderAndMenu } from "../../App";

export default function Header() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (pathsWithoutHeaderAndMenu.includes(location.pathname)) {
    return null;
  }

  return (
    <Container>
      <img src={logo} alt="TrackIt" onClick={() => navigate("/today")} />

      <Avatar src={auth.image} alt={auth.name} />
    </Container>
  );
}