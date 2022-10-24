import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import logo from "../../assets/imgs/Group 8.png";
import { borderGray, softblue } from "../../constants/Colors";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const body = { email, name, image, password };
  const navigate = useNavigate();

  function signUpSucess(d) {
    setLoading(false);
    navigate("/");
  }
  function signUpError(d) {
    setLoading(false);
    d.details ? Swal.fire(d.details[0]) : Swal.fire(d.message);
  }

  function submitSignUp(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );
    promise.then((reply) => signUpSucess(reply.data));
    promise.catch((reply) => signUpError(reply.response.data));
  }

  return (
    <RegisterPageFormat softblue={softblue} borderGray={borderGray}>
      <img src={logo} alt="Logo TrackIt"></img>
      <form onSubmit={submitSignUp}>
        <input
          data-identifier="input-email"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          data-identifier="input-password"
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          data-identifier="input-name"
          type="text"
          value={name}
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          data-identifier="input-photo"
          type="url"
          value={image}
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
          required
          disabled={loading}
        ></input>
        <button type="submit" disabled={loading} data-identifier="back-to-login-action">
          {loading ? (
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
          )}
        </button>
      </form>
      <StyledLink to="/" softblue={softblue}>
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
      background-color: ${(props) => props.softblue};
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
  color: ${(props) => props.softblue};
`;
