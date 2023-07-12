import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Main from "./components/layouts/Main";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/pages/BookingPage";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/booking"} element={<BookingPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
