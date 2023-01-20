import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
