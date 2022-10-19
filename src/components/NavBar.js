import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { hardBlue } from "../constants/Colors"
import { useContext } from "react"
import { AuthContext } from "../contexts/auth"

export default function NavBar() {
    const navigate = useNavigate()
    const {loginInfo} = useContext(AuthContext)
    return(
        <NavBarFormat hardBlue={hardBlue}>
            <p onClick={()=>navigate("/")}>TrackIt</p>
            <img src={loginInfo.image} alt="Foto de perfil"></img>
        </NavBarFormat>
    )
};

const NavBarFormat = styled.div`
    height: 70px;
    width: 100%;
    background-color: ${props=> props.hardBlue};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    z-index: 10;
    p{
        color: #ffffff;
        font-size: 39px;
        font-family: 'Playball', cursive;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 100px;
    }
`