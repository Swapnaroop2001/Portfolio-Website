import About from "./components/About/About";
import Intro from "./components/Introduction/intro";
import Productlist from "./components/ProductList/Productlist";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Productlist/>
      <Contact/>
    </div>
  );
}

export default App;
