import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { hardBlue } from "../constants/Colors"

export default function NavBar() {
    const navigate = useNavigate()
    return(
        <NavBarFormat hardBlue={hardBlue}>
            <p onClick={()=>navigate("/")}>TrackIt</p>
            <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik" alt="asdasda"></img>
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