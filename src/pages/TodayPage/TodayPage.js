import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { correctGreen, grayText, hardBlue } from "../../constants/Colors";

export default function TodayPage() {
    return(
        <TodayPageFormat>
            <NavBar></NavBar>
            <Footer/>
            <TitleToday hardBlue={hardBlue}>
                Terça, dia 18
            </TitleToday>
            <SubTitleToday grayText={grayText}>Nenhum hábito concluído ainda</SubTitleToday>
            <SubTitleTodayCorrect correctGreen={correctGreen}> 67% dos hábitos concluídos </SubTitleTodayCorrect>
            <TodayCard grayText={grayText}>
                <CardTitle grayText={grayText}>Ler 1 capítulo de livro</CardTitle>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
                <ion-icon name="checkbox"></ion-icon>
            </TodayCard>
            <TodayCardChecked grayText={grayText} correctGreen={correctGreen}>
                <CardTitleChecked grayText={grayText} correctGreen={correctGreen}>Ler 1 capítulo de livro</CardTitleChecked>
                <span>
                    <TextNormal grayText={grayText}>Sequência atual: </TextNormal>
                    <TextChecked correctGreen={correctGreen}>4 dias</TextChecked>
                </span>
                <span>
                    <TextNormal grayText={grayText}>Seu recorde:</TextNormal>
                    <TextNormal grayText={grayText}>5 dias</TextNormal>
                </span>
                <ion-icon name="checkbox"></ion-icon>
            </TodayCardChecked>
        </TodayPageFormat>
    )
};

const TodayPageFormat=styled.div`
    background-color: #f2f2f2;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 17px;
`
const TitleToday=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-family: "Lexend Deca";
    font-size: 23px;
    color: ${props=>props.hardBlue};
`
const SubTitleToday=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-family: "Lexend Deca";
    font-size: 18px;
    color: ${props=>props.grayText};
`
const SubTitleTodayCorrect=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-family: "Lexend Deca";
    font-size: 18px;
    color: ${props=>props.correctGreen};
`
const TodayCard = styled.div`
    width: 100%;
    height: 94px;
    background-color: #ffffff;
    padding: 13px;
    position: relative;
    margin-bottom: 10px;
    p{
    font-family: "Lexend Deca";
    font-size: 13px;
    color: ${props=>props.grayText};
    }
    ion-icon{
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 80px;
        color: ${props=>props.grayText};
    }
`
const TodayCardChecked = styled.div`
    width: 100%;
    height: 94px;
    background-color: #ffffff;
    padding: 13px;
    position: relative;
    span{
        display: flex;
    }
    ion-icon{
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 80px;
        color: ${props=>props.correctGreen};
    }
`
const CardTitle = styled.div`
    margin-bottom: 15.5px;
    font-family: "Lexend Deca";
    font-size: 18px;
    color: ${props=>props.grayText};
`
const CardTitleChecked = styled.div`
    margin-bottom: 15.5px;
    font-family: "Lexend Deca";
    font-size: 18px;
    color: ${props=>props.grayText};
`
const TextNormal = styled.p`
    font-family: "Lexend Deca";
    font-size: 13px;
    margin-right: 3px;
    color: ${props=>props.grayText};
`
const TextChecked = styled.p`
    font-family: "Lexend Deca";
    font-size: 13px;
    margin-right: 3px;
    color: ${props=>props.correctGreen};
`