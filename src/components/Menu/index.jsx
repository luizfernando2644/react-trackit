import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Footer,
  StyledLink,
  ContentProgressbar,
  CircularProgressbarContainer
} from "./style";
import { Link, useLocation } from "react-router-dom";
import useProgress from "../../hooks/useProgress";
import { pathsWithoutHeaderAndMenu } from "../../App";

export default function Menu() {
  const { progress } = useProgress();
  const location = useLocation();

  if (pathsWithoutHeaderAndMenu.includes(location.pathname)) {
    return null;
  }

  return (
    <Footer>
      <StyledLink to="/habits">Hábitos</StyledLink>

      <ContentProgressbar>
        <CircularProgressbarContainer>
          <Link to="/today">
            <CircularProgressbar
              value={progress}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
          </Link>
        </CircularProgressbarContainer>
      </ContentProgressbar>

      <StyledLink to="/historic">Histórico</StyledLink>
    </Footer>
  );
}