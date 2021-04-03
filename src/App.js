import "./App.css";

import Illustration from "./components/Illustration";
import Items from "./components/Items";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Illustration />
        <ul className="faq">
          <h1 className="title" tabIndex="0">
            FAQ
          </h1>
        </ul>
        <Items />
      </div>
    </div>
  );
}

export default App;
