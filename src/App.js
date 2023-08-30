import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Main from "./components/layouts/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MenuPage from "@/components/pages/MenuPage";
import NotFoundPage from "@/components/pages/NotFoundPage";
import HomePage from "@/components/pages/HomePage";
import BookingPage from "@/components/pages/BookingPage";
import LoginPage from "@/components/pages/LoginPage";
import AboutPage from "@/components/pages/AboutPage";
import OrderingPage from "@/components/pages/OrderingPage";
import ConfirmedBookingPage from "@/components/pages/ConfirmedBookingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/menu"} element={<MenuPage />} />
          <Route path={"/booking"} element={<BookingPage />} />
          <Route
            path={"/confirmed-booking"}
            element={<ConfirmedBookingPage />}
          />
          <Route path={"/ordering"} element={<OrderingPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
