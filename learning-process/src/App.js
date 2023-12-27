import logo from './logo.svg';
import './App.css';
import Family from './Components/separateCom1';

function App() {
  return (
    // we can keep the tag as non<> </> it just a container tag
    <div>
      <h1>Initial component App: Ram's family</h1>
      <Family/>
    </div>
  );
}

export default App;
