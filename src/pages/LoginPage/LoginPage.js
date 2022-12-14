import axios from "axios";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import logo from "../../assets/imgs/Group 8.png";
import { borderGray, softblue } from "../../constants/Colors";

import { AuthContext } from "../../contexts/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setLoginInfo } = useContext(AuthContext);

  const body = { email, password };

  function loginSucess(d) {
    setLoginInfo(d);
    setLoading(false);
    navigate("/hoje");
  }
  function loginError(d) {
    setLoading(false);
    d.details ? Swal.fire(d.details[0]) : Swal.fire(d.message);
  }
  function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      body
    );
    promise.then((reply) => loginSucess(reply.data));
    promise.catch((reply) => loginError(reply.response.data));
  }
  return (
    <LoginPageFormat
      onSubmit={submitLogin}
      borderGray={borderGray}
      softblue={softblue}
    >
      <img src={logo} alt="Logo TrackIt"></img>
      <form>
        <input
          data-identifier="input-email"
          value={email}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        ></input>
        <input
          data-identifier="input-password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        ></input>
        <button type="submit" disabled={loading} data-identifier="login-btn">
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
            "Entrar"
          )}
        </button>
      </form>
      <StyledLinkLogin to="/cadastro" softblue={softblue} data-identifier="sign-up-action">
        N??o tem uma conta? Cadastre-se!
      </StyledLinkLogin>
    </LoginPageFormat>
  );
}

const LoginPageFormat = styled.div`
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
const StyledLinkLogin = styled(Link)`
  color: ${(props) => props.softblue};
`;
