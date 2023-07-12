import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Main from "./components/layouts/Main";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
      </Main>
      <Footer />
    </>
  );
}

export default App;
