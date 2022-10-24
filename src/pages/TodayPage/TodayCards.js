import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { correctGreen, grayText } from "../../constants/Colors";
import { AuthContext } from "../../contexts/auth";

export default function TodayCards({ info, showToday }) {
  const { config } = useContext(AuthContext);
  function checkCard() {
    if (info.done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/uncheck`,
        {},
        config
      );
      promise.then((reply) => showToday());
      promise.catch((reply) => console.log(reply.response.data));
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}/check`,
        {},
        config
      );
      promise.then((reply) => showToday());
      promise.catch((reply) => console.log(reply.response.data));
    }
  }

  return (
    <TodayCard data-identifier="today-infos" grayText={grayText} correctGreen={correctGreen} info={info}>
      <CardTitleChecked grayText={grayText} correctGreen={correctGreen}>
        {info.name}
      </CardTitleChecked>
      <span>
        <TextNormal grayText={grayText}>Sequência atual: </TextNormal>
        <TextCurrent
          grayText={grayText}
          correctGreen={correctGreen}
          done={info.done}
        >
          {info.currentSequence} dias
        </TextCurrent>
      </span>
      <span>
        <TextNormal grayText={grayText}>Seu recorde:</TextNormal>
        <TextHighest
          grayText={grayText}
          correctGreen={correctGreen}
          current={info.currentSequence}
          highest={info.highestSequence}
        >
          {info.highestSequence} dias
        </TextHighest>
      </span>
      <ion-icon data-identifier="done-habit-btn" onClick={() => checkCard()} name="checkbox"></ion-icon>
    </TodayCard>
  );
}

const TodayCard = styled.div`
  width: 100%;
  min-height: 94px;
  background-color: #ffffff;
  padding: 13px;
  position: relative;
  margin-bottom: 10px;
  span {
    display: flex;
  }
  ion-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 80px;
    color: ${(props) =>
      props.info.done ? props.correctGreen : props.grayText};
  }
`;
const TextNormal = styled.p`
  font-family: "Lexend Deca";
  font-size: 13px;
  margin-right: 3px;
  color: ${(props) => props.grayText};
`;
const TextCurrent = styled.p`
  font-family: "Lexend Deca";
  font-size: 13px;
  margin-right: 3px;
  color: ${(props) => (props.done ? props.correctGreen : props.grayText)};
`;
const TextHighest = styled.p`
  font-family: "Lexend Deca";
  font-size: 13px;
  margin-right: 3px;
  color: ${(props) =>
    props.current === props.highest && props.highest !== 0
      ? props.correctGreen
      : props.grayText};
`;
const CardTitleChecked = styled.div`
  max-width: 220px;
  margin-bottom: 15.5px;
  font-family: "Lexend Deca";
  font-size: 18px;
  color: ${(props) => props.grayText};
`;
