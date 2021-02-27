import './App.css';

import Illustration from './components/Illustration';
import Title from './components/Title';
import FAQ from './components/FAQ';
import Question from './components/Question';

function App() {
  return (
    <div className="app">
      <Illustration />
      <Title />
      <FAQ>
        <Question />
      </FAQ>
    </div>
  );
}

export default App;