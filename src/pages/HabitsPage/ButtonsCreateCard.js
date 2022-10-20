import { useState } from "react"
import styled from "styled-components"
import { selected, unselected } from "../../constants/Colors"

export default function ButtonsCreateCard({u, i, selectedDays, setSelectedDays}) {
    const [buttonSelect, setButtonSelect] = useState(false)

    function dayStatus(i){
        if (!selectedDays.includes(i)){
            setSelectedDays([...selectedDays, i])
        } else {
            const newArray = selectedDays.filter((index)=> index!==i)
            setSelectedDays(newArray)
        }
        setButtonSelect(!buttonSelect)
        console.log(selectedDays)
    }

    return(
        <ButtonUnselected unselected={unselected} selected={selected} buttonSelect={buttonSelect} onClick={()=>dayStatus(i)}>{u}</ButtonUnselected>
    )
};

const ButtonUnselected = styled.button`
        background-color: ${props=> props.buttonSelect ? props.selected.backgroud :props.unselected.backgroud};
        width: 30px;
        height: 30px;
        border: 1px solid ${props=>props.buttonSelect ? props.selected.border :props.unselected.border};
        font-family: "Lexend Deca";
        font-size: 20px;
        color: ${props=>props.buttonSelect ? props.selected.color :props.unselected.color};
        border-radius: 5px;
        margin-right: 4px;
`