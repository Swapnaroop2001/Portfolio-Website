import About from "./components/About/About";
import Intro from "./components/Introduction/intro";
import Productlist from "./components/ProductList/Productlist";

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Productlist/>
    </div>
  );
}

export default App;
