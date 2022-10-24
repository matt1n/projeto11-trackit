import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { hardBlue, grayText } from "../../constants/Colors";

export default function HistoricPage() {
  return (
    <HistoricPageFormat>
      <NavBar />
      <TitleHistoric hardBlue={hardBlue}>
        <h1>Histórico</h1>
      </TitleHistoric>
      <HistoricEmpty grayText={grayText}>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </HistoricEmpty>
      <Footer />
    </HistoricPageFormat>
  );
}

const HistoricPageFormat = styled.div`
  margin-top: 76px; /*70px com o botão*/
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 17px;
`;
const TitleHistoric = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-family: "Lexend Deca";
  font-size: 23px;
  color: ${(props) => props.hardBlue};
`;

const HistoricEmpty = styled.p`
  font-family: "Lexend Deca";
  font-size: 18px;
  color: ${(props) => props.grayText};
`;
