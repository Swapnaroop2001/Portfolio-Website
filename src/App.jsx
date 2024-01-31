import About from "./components/About/About";
import Intro from "./components/Introduction/intro";
import Productlist from "./components/ProductList/Productlist";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Skills/>
      <Productlist/>
      <Contact/>
    </div>
  );
}

export default App;
