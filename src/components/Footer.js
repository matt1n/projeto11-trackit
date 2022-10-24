import { useContext } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { softblue } from "../constants/Colors";
import { AuthContext } from "../contexts/auth";

export default function Footer() {
  const navigate = useNavigate();
  const { percent } = useContext(AuthContext);
  return (
    <FooterFormat softblue={softblue}>
      <FooterRelative softblue={softblue}>
        <HabitsButton data-identifier="habit-page-action" onClick={() => navigate("/habitos")}>
          Hábitos
        </HabitsButton>
        <HistoricButton data-identifier="historic-page-action" onClick={() => navigate("/historico")}>
          Histórico
        </HistoricButton>
        <Pruu onClick={() => navigate("/hoje")}>
          <Circless
            value={percent}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: `${softblue}`,
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          >
            Hoje
          </Circless>
        </Pruu>
      </FooterRelative>
    </FooterFormat>
  );
}

const FooterFormat = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  color: ${(props) => props.softblue};
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  cursor: pointer;
  z-index: 10;
`;
const FooterRelative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  span {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const HabitsButton = styled.span`
  font-family: "Lexend Deca";
  font-size: 18px;
  margin-right: 45.5px;
`;
const HistoricButton = styled.span`
  margin-left: 45.5px;
  font-family: "Lexend Deca";
  font-size: 18px;
`;
const Pruu = styled.div`
  position: fixed;
  width: 91px;
  height: 91px;
  bottom: 10px;
  left: 50%;
  margin-left: -45.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "Lexend Deca";
  font-size: 18px;
  path {
    transition: all 0.5s;
  }
`;
const Circless = styled(CircularProgressbarWithChildren)`
  position: fixed;
  width: 91px;
  height: 91px;
  bottom: 10px;
  margin-left: -45.5px;
  display: flex;
`;
