import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { softBlue } from "../constants/Colors";

export default function Footer() {
    const navigate = useNavigate()
    return(
        <FooterFormat softBlue={softBlue}>
            <FooterRelative softBlue={softBlue}>
                <HabitsButton onClick={()=>navigate("/habitos")}>Hábitos</HabitsButton>
                <HistoricButton onClick={()=>navigate("/historico")}>Histórico</HistoricButton>
                <div onClick={()=>navigate("/hoje")}>Hoje</div>
            </FooterRelative>
        </FooterFormat>
    )
};

const FooterFormat = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    color: ${props=> props.softBlue};
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
    z-index: 10;
`
const FooterRelative = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    span{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div{
        position: absolute;
        width: 91px;
        height: 91px;
        border-radius: 91px;
        background-color: aqua;
        bottom: 10px;
        left: 50%;
        margin-left: -45.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props=> props.softBlue};
        color: #ffffff;
    }
`
const HabitsButton = styled.span`
    margin-right: 45.5px;
`
const HistoricButton = styled.span`
    margin-left: 45.5px;
`