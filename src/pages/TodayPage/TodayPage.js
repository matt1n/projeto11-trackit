import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { correctGreen, grayText, hardBlue } from "../../constants/Colors";
import { AuthContext } from "../../contexts/auth";
import TodayCards from "./TodayCards";

export default function TodayPage() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const [todayInfo, setTodayInfo] = useState([]);
  const { config, percent, setPercent } = useContext(AuthContext);
  const totalPercent = 100;

  function definePercent(data) {
    let arrayDone = data.filter((reply) => reply.done);
    const percentDivision = arrayDone.length / data.length;
    arrayDone.length !== 0
      ? setPercent(percentDivision * totalPercent)
      : setPercent(0);
  }

  function showTodaySucess(data) {
    setTodayInfo(data);
    definePercent(data);
  }

  function showToday() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((reply) => showTodaySucess(reply.data));
    promise.catch((reply) => console.log(reply.response.data));
  }

  useEffect(() => {
    showToday();
  });

  return (
    <TodayPageFormat>
      <NavBar></NavBar>
      <Footer />
      <TitleToday hardBlue={hardBlue} data-identifier="today-infos">
        {weekDays[dayjs().day()]}, {dayjs().format("DD/MM")}
      </TitleToday>
      {percent === 0 ? (
        <SubTitleToday grayText={grayText} data-identifier="today-infos">
          Nenhum hábito concluído ainda
        </SubTitleToday>
      ) : (
        <SubTitleTodayCorrect correctGreen={correctGreen} data-identifier="today-infos">
          {" "}
          {percent.toFixed(0)}% dos hábitos concluídos{" "}
        </SubTitleTodayCorrect>
      )}

      {todayInfo !== 0 &&
        todayInfo.map((t, i) => (
          <TodayCards info={t} showToday={showToday}></TodayCards>
        ))}
    </TodayPageFormat>
  );
}

const TodayPageFormat = styled.div`
  background-color: #f2f2f2;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 17px;
`;
const TitleToday = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  font-family: "Lexend Deca";
  font-size: 23px;
  color: ${(props) => props.hardBlue};
`;
const SubTitleToday = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: "Lexend Deca";
  font-size: 18px;
  color: ${(props) => props.grayText};
`;
const SubTitleTodayCorrect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: "Lexend Deca";
  font-size: 18px;
  color: ${(props) => props.correctGreen};
`;
