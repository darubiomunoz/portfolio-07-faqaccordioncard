import "./App.css";

import Illustration from "./components/Illustration";
import Items from "./components/Items";

function App() {
  return (
    <main className="app">
      <section className="app__container">
        <Illustration />
        <div className="app__body">
          <div className="faq">
            <h1 className="title" tabIndex="0">
              FAQ
            </h1>
          </div>
          <Items />
        </div>
      </section>
    </main>
  );
}

export default App;
