import styled from "styled-components";
import { grayText } from "../../constants/Colors";
import ButtonsHabitCards from "./ButtonsHabitCards";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import Swal from "sweetalert2";

export default function HabitCards({ u, days, card, showCards }) {
  const { config } = useContext(AuthContext);
  function deleteCard() {
    Swal.fire({
      title: "Você tem certeza?",
      text: "É um caminho sem volta!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, tira da minha frente!",
      cancelButtonText: "Pera aí",
    }).then((result) => {
      if (result.isConfirmed) {
        const promise = axios.delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${card.id}`,
          config
        );
        promise.then(showCards());
        promise.catch((reply) => console.log(reply.response.data));
        Swal.fire(
          "Deletado!",
          "Seu hábito foi excluído com sucesso",
          "success"
        );
      }
    });
  }
  return (
    <CardHabits grayText={grayText}>
      <p data-identifier="habit-name">{u.name}</p>
      <ion-icon data-identifier="delete-habit-btn" onClick={() => deleteCard()} name="trash-outline"></ion-icon>
      <DaysContainer>
        {days.map((d, i) => (
          <ButtonsHabitCards d={d} i={i} card={card}></ButtonsHabitCards>
        ))}
      </DaysContainer>
    </CardHabits>
  );
}

const CardHabits = styled.div`
  width: 100%;
  min-height: 91px;
  padding: 13px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;
  position: relative;
  p {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: ${(props) => props.grayText};
    margin-bottom: 10px;
  }
  ion-icon {
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
const DaysContainer = styled.div`
  display: flex;
`;
