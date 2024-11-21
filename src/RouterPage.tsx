import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";
import MoviePage from "./page/MoviePage";
import SeatSelectionPage from "./page/SeatSelectionPage";
import DenemePage from "./page/DenemePage";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        <Route path="/movie-page" element={<MoviePage/>}></Route>
        <Route path="/seat-selection" element={<SeatSelectionPage/>}></Route>
        <Route path="/deneme" element={<DenemePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
