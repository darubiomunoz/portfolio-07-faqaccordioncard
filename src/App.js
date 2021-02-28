import './App.css';

import Illustration from './components/Illustration';
import Title from './components/Title';
import FAQ from './components/FAQ';
import Item from './components/Item';

function App() {
  return (
    <div className="app">
      <Illustration />
      <Title />
      <FAQ>
        <Item />
      </FAQ>
    </div>
  );
}

export default App;