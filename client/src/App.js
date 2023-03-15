import "./styles.css";
import { TopPanel } from "./components/TopPanel";
import Events from "./components/events";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Techtonica Events 2023</h1>
      </header>
      <main>
        <TopPanel />
        <Events />
      </main>
    </div>
  );
}

export default App;
