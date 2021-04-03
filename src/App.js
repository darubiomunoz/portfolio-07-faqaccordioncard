import "./App.css";

import Illustration from "./components/Illustration";
import FAQ from "./components/FAQ";
import Items from "./components/Items";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Illustration />
        <FAQ>
          <Items />
        </FAQ>
      </div>
    </div>
  );
}

export default App;
