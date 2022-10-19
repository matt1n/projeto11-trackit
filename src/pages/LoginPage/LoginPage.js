import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/imgs/Group 8.png"
import { borderGray, softBlue } from "../../constants/Colors"

export default function LoginPage() {
    const navigate = useNavigate()
    function submitLogin(e){
        e.preventDefault()
        navigate("/habitos")
    }
    return(
        <LoginPageFormat onSubmit={submitLogin} borderGray={borderGray} softBlue={softBlue}>
            <img src={logo} alt='Logo TrackIt'></img>
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Entrar</button>
            </form>
            <StyledLinkLogin to="/cadastro" softBlue={softBlue}>Não tem uma conta? Cadastre-se!</StyledLinkLogin>
        </LoginPageFormat>
    )
};

const LoginPageFormat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin-top: 12%;
        margin-bottom: 36px;
    }
    form{
        display: flex;
        flex-direction: column;
        width: 80%;
        input{
            height: 45px;
            margin-bottom: 6px;
            border: 1px solid ${props=>props.borderGray};
            border-radius: 5px;
            padding: 0 11px;
            color: #000000;
            font-family: "Lexend Deca";
            font-size: 16px;
            &::placeholder{
                color: #DBDBDB;
                font-family: "Lexend Deca";
                font-size: 16px;   
            }
        }
        button{
            height: 45px;
            margin-bottom: 26.5px;
            background-color: ${props=>props.softBlue};
            border: none;
            border-radius: 5px;
            font-family: "Lexend Deca";
            font-size: 16px;
            color: #ffffff;
        }
    }
`
const StyledLinkLogin = styled(Link)`
    color: ${props=>props.softBlue};
`
