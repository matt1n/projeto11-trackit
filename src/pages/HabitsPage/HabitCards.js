import styled from "styled-components"
import { grayText } from "../../constants/Colors"
import ButtonsHabitCards from "./ButtonsHabitCards"
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";

export default function HabitCards({u, days, card, showCards}) {
    const {loginInfo} = useContext(AuthContext)
    const config = {
        headers: {
          Authorization: `Bearer ${loginInfo.token}`,
        },
      };
    function deleteCard(){
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${card.id}`, config)
        promise.then(showCards())
        promise.catch(reply=>console.log(reply.response.data))
    }
    return(
        <CardHabits grayText={grayText}>
                <p>{u.name}</p>
                <ion-icon onClick={()=>deleteCard()} name="trash-outline"></ion-icon>
                <DaysContainer>
                    {days.map((d,i)=> <ButtonsHabitCards d={d} i={i} card={card}></ButtonsHabitCards>)}
                </DaysContainer>
            </CardHabits>
    )
};

const CardHabits = styled.div`
    width: 100%;
    height: 91px;
    padding: 13px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 29px;
    position: relative;
    p{
        font-family: "Lexend Deca";
        font-size: 20px;
        color: ${props=>props.grayText};
        margin-bottom: 10px;
    }
    ion-icon{
        font-size: 20px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`
const DaysContainer = styled.div`
    display: flex;
`