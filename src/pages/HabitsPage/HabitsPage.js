import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { softBlue, hardBlue, borderGray, grayText, selected, unselected } from "../../constants/Colors";

export default function HabitsPage() {
    return(
        <HabitsPageFormat>
            <NavBar/>
            <Footer/>
            <TitleHabits softBlue={softBlue} hardBlue={hardBlue}>
                <h1>Meus hábitos</h1>
                <button><p>+</p></button>
            </TitleHabits>
            <CreateCardHabits borderGray={borderGray} softBlue={softBlue} selected={selected} unselected={unselected}>
                <input></input>
                <ButtonUnselected unselected={unselected}>S</ButtonUnselected>
                <ButtonSelected selected={selected}>T</ButtonSelected>
                <div>
                    <ButtonCancel softBlue={softBlue}>Cancelar</ButtonCancel>
                    <ButtonSave softBlue={softBlue}>Salvar</ButtonSave>
                </div>
            </CreateCardHabits>
            <HabitsEmpty grayText={grayText}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</HabitsEmpty>
            <CardHabits grayText={grayText}>
                <p>título</p>
                <ion-icon name="trash-outline"></ion-icon>
                <ButtonUnselected unselected={unselected}>S</ButtonUnselected>
                <ButtonSelected selected={selected}>T</ButtonSelected>
            </CardHabits>
            
        </HabitsPageFormat>
    )
};

const HabitsPageFormat = styled.div`
    background-color: #f2f2f2;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 17px;
    margin-bottom: 101px;
`
const TitleHabits = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    font-family: "Lexend Deca";
    font-size: 23px;
    color: ${props=>props.hardBlue};
    button{
        width: 40px;
        height: 35px;
        background-color: ${props=>props.softBlue};
        border: none;
        border-radius: 5px;
        font-family: "Lexend Deca";
        font-size: 27px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            height: 35px;
        }
    }
`
const CreateCardHabits = styled.div`
    width: 100%;
    height: 180px;
    padding: 18px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom: 29px;
    input{
        width: 100%;
        margin-bottom: 8px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid ${props=>props.borderGray};
    }
    div{
        display: flex;
        justify-content: flex-end;
    }
`
const ButtonUnselected = styled.button`
        background-color: ${props=>props.unselected.backgroud};
        width: 30px;
        height: 30px;
        border: 1px solid ${props=>props.unselected.border};
        font-family: "Lexend Deca";
        font-size: 20px;
        color: ${props=>props.unselected.color};
        border-radius: 5px;
        margin-right: 4px;
`
const ButtonSelected = styled.button`
        background-color: ${props=>props.selected.backgroud};
        width: 30px;
        height: 30px;
        border: 1px solid ${props=>props.selected.border};
        font-family: "Lexend Deca";
        font-size: 20px;
        color: ${props=>props.selected.color};
        border-radius: 5px;
`
const ButtonCancel = styled.button`
            margin-top: 19px;
            margin-right: 15px;
            background-color: #ffffff;
            height: 35px;
            border: none;
            border-radius: 5px;
            font-family: "Lexend Deca";
            font-size: 16px;
            color: ${props=>props.softBlue};
`
const ButtonSave = styled.button`
            margin-top: 19px;
            background-color: ${props=>props.softBlue};
            width: 84px;
            height: 35px;
            border: none;
            border-radius: 5px;
            font-family: "Lexend Deca";
            font-size: 16px;
            color: #ffffff;
`
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
const HabitsEmpty = styled.p`
    font-family: "Lexend Deca";
    font-size: 18px;
    color: ${props=>props.grayText};
`