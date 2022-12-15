import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Employes from "./components/Employes";
import Footer from "./components/Footer";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <div className="arrow-up">
          {" "}
          <a className="arrow-up-a" href="/#">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
        <Employes />
        <Offers />
      </main>
      <Footer />
    </>
  );
}

export default App;
