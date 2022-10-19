import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.js";
import GlobalStyle from "../assets/styles/GlobalStyle.js";
import Background from "./Background.js";
import RegisterPage from "../pages/RegisterPage/RegisterPage.js";
import HabitsPage from "../pages/HabitsPage/HabitsPage.js";
import TodayPage from "../pages/TodayPage/TodayPage.js";
import HistoricPage from "../pages/HistoricPage/HistoricPage.js";
import AuthProvider from "../contexts/auth.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Background />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
