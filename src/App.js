import logo from './logo.svg';
import './App.css';

function App() {
  const studentID = "101466119";
  const name = "Hooman"; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p>{studentID}</p>
        <p>{name}</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;
