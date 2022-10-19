import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/imgs/Group 8.png";
import { borderGray, softBlue } from "../../constants/Colors";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const body = { email, name, image, password };
  const navigate = useNavigate()

  function doSignUp(e) {
    e.preventDefault();
    console.log(body);
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
    promise.then(()=>navigate('/'))
    promise.catch(reply => alert(reply.response.data.details[0]));
  }

  return (
    <RegisterPageFormat softBlue={softBlue} borderGray={borderGray}>
      <img src={logo} alt="Logo TrackIt"></img>
      <form onSubmit={doSignUp}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <input
          type="text"
          value={name}
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          type="url"
          value={image}
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
          required
        ></input>
        <button type="submit">Cadastrar</button>
      </form>
      <StyledLink to="/" softBlue={softBlue}>
        Já tem uma conta? Faça login!
      </StyledLink>
    </RegisterPageFormat>
  );
}

const RegisterPageFormat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 12%;
    margin-bottom: 36px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    input {
      height: 45px;
      margin-bottom: 6px;
      border: 1px solid ${(props) => props.borderGray};
      border-radius: 5px;
      padding: 0 11px;
      color: #000000;
      font-family: "Lexend Deca";
      font-size: 16px;
      &::placeholder {
        color: #dbdbdb;
        font-family: "Lexend Deca";
        font-size: 16px;
      }
    }
    button {
      height: 45px;
      margin-bottom: 26.5px;
      background-color: ${(props) => props.softBlue};
      border: none;
      border-radius: 5px;
      font-family: "Lexend Deca";
      font-size: 16px;
      color: #ffffff;
    }
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.softBlue};
`;
