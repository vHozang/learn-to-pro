import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./componets/ExpenseItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn</p>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
