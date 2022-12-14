import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import {
  softblue,
  hardBlue,
  borderGray,
  grayText,
  selected,
  unselected,
} from "../../constants/Colors";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import ButtonsCreateCard from "./ButtonsCreateCard";
import axios from "axios";
import HabitCards from "./HabitCards";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";

export default function HabitsPage() {
  const { config } = useContext(AuthContext);
  const [createCard, setCreateCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const body = { name: cardTitle, days: selectedDays };

  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    showCards();
  });

  function showCards() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((reply) => setCards(reply.data));
    promise.catch((reply) => console.log(reply.response.data));
  }

  function saveHabitSucess(data) {
    setSelectedDays([]);
    setCardTitle("");
    setCreateCard(false);
    setLoading(false);
    showCards();
  }

  function saveHabitError(data) {
    setLoading(false);
    data.details ? Swal.fire(data.details[0]) : Swal.fire(data.message);
  }

  function cancelHabit() {
    setSelectedDays([]);
    setCardTitle("");
    setCreateCard(false);
  }

  function saveHabit() {
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );
    promise.then((reply) => saveHabitSucess(reply.data));
    promise.catch((reply) => saveHabitError(reply.response.data));
  }

  return (
    <HabitsPageFormat>
      <NavBar />
      <Footer />
      <TitleHabits softblue={softblue} hardBlue={hardBlue}>
        <h1>Meus h??bitos</h1>
        <button data-identifier="create-habit-btn" onClick={() => setCreateCard(true)}>
          <p>+</p>
        </button>
      </TitleHabits>
      {createCard && (
        <CreateCardHabits
          borderGray={borderGray}
          grayText={grayText}
          softblue={softblue}
          selected={selected}
          unselected={unselected}
        >
          <input
            data-identifier="input-habit-name"
            value={cardTitle}
            placeholder="Digite seu t??tulo"
            onChange={(e) => setCardTitle(e.target.value)}
            disabled={loading}
          ></input>
          {days.map((u, i) => (
            <ButtonsCreateCard
              u={u}
              i={i}
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
            ></ButtonsCreateCard>
          ))}
          <div>
            <ButtonCancel
              data-identifier="cancel-habit-create-btn"
              softblue={softblue}
              disabled={loading}
              onClick={() => cancelHabit()}
            >
              Cancelar
            </ButtonCancel>
            <ButtonSave
              data-identifier="save-habit-create-btn"
              softblue={softblue}
              disabled={loading}
              onClick={() => saveHabit()}
            >
              {loading ? (
                <ThreeDots
                  height="40"
                  width="40"
                  radius="9"
                  color="#ffffff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Salvar"
              )}
            </ButtonSave>
          </div>
        </CreateCardHabits>
      )}
      {cards.length === 0 ? (
        <HabitsEmpty grayText={grayText} data-identifier="no-habit-message">
          Voc?? n??o tem nenhum h??bito cadastrado ainda. Adicione um h??bito para
          come??ar a trackear!
        </HabitsEmpty>
      ) : (
        cards.map((u, i) => (
          <HabitCards
            u={u}
            days={days}
            card={cards[i]}
            showCards={showCards}
          ></HabitCards>
        ))
      )}
    </HabitsPageFormat>
  );
}

const HabitsPageFormat = styled.div`
  background-color: #f2f2f2;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 17px;
  margin-bottom: 101px;
`;
const TitleHabits = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-family: "Lexend Deca";
  font-size: 23px;
  color: ${(props) => props.hardBlue};
  button {
    width: 40px;
    height: 35px;
    background-color: ${(props) => props.softblue};
    border: none;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-size: 27px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      height: 35px;
    }
  }
`;
const CreateCardHabits = styled.div`
  width: 100%;
  height: 180px;
  padding: 18px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
  input {
    width: 100%;
    margin-bottom: 8px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.borderGray};
    font-family: "Lexend Deca";
    font-size: 20px;
    color: ${(props) => props.grayText};
    &::placeholder {
      color: #dbdbdb;
    }
    &:disabled {
      filter: opacity(0.7) brightness(0.7);
    }
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;
const ButtonCancel = styled.button`
  margin-top: 19px;
  margin-right: 15px;
  background-color: #ffffff;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-size: 16px;
  color: ${(props) => props.softblue};
  &:disabled {
    filter: opacity(0.8);
  }
`;
const ButtonSave = styled.button`
  margin-top: 19px;
  background-color: ${(props) => props.softblue};
  width: 84px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-size: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    filter: opacity(0.8);
  }
`;
const HabitsEmpty = styled.p`
  font-family: "Lexend Deca";
  font-size: 18px;
  color: ${(props) => props.grayText};
`;
