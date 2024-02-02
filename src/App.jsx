import About from "./components/About/About";
import Intro from "./components/Introduction/intro";
import Navbar from "./components/Navbar/Navbar";
import Productlist from "./components/ProductList/Productlist";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Productlist/>
      <Contact/>
    </div>
  );
}

export default App;
