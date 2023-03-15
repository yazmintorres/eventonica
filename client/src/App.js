import "./styles.css";
import { TopPanel } from "./components/TopPanel";
import ListEvents from "./components/ListEvents";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Techtonica Events 2023</h1>
      </header>
      <main>
        <TopPanel />
        <ListEvents />
      </main>
    </div>
  );
}

export default App;
