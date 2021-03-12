import './App.css';

import Illustration from './components/Illustration';
import FAQ from './components/FAQ';
import Item from './components/Item';

function App() {
  return (
    <div className="app">
      <Illustration />
      <FAQ>
        <Item />
      </FAQ>
    </div>
  );
}

export default App;