import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/imgs/Group 8.png";
import { borderGray, softBlue } from "../../constants/Colors";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)
  const body = { email, name, image, password };
  const navigate = useNavigate()

  function signUpSucess(d){
    setLoading(false)
    console.log(d)
    navigate('/')
  }
  function signUpError(d){
    setLoading(false)
    d.details ? console.log(d.details[0]) : console.log(d.message) 
  }

  function submitSignUp(e) {
    e.preventDefault();
    setLoading(true)
    console.log(body);
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
    promise.then((reply)=>signUpSucess(reply.data))
    promise.catch(reply => signUpError(reply.response.data));
  }

  return (
    <RegisterPageFormat softBlue={softBlue} borderGray={borderGray}>
      <img src={logo} alt="Logo TrackIt"></img>
      <form onSubmit={submitSignUp}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          type="text"
          value={name}
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          type="url"
          value={image}
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
          required
          disabled={loading}
        ></input>
        <button type="submit" disabled={loading}>{loading ? (
            <ThreeDots
              height="60"
              width="60"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Cadastrar"
          )}</button>
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
      &:disabled {
        filter: opacity(0.7) brightness(0.7);
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
      display: flex;
      align-items: center;
      justify-content: center;
      &:disabled {
        filter: opacity(0.8);
      }
    }
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.softBlue};
`;
