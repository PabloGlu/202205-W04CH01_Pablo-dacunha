import logo from './logo.svg';
import './App.css';
import { Counter } from "../counter/counter";
import { List } from '../list/list';

function App() {
  return (
    <div className="App">
          <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <Counter></Counter>
      <main className="main">
        <List></List>
      </main>
    </div>
    </div>
  );
}

export default App;
