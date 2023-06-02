import "./App.css";
import Cards from "./Components/Cards";
import Introduction from "./Components/Introduction";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <Introduction />
          <Cards />
        </div>
      </main>
    </div>
  );
}

export default App;
