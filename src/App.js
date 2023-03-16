import "./App.css";
import Card from "./Card";
import "tachyons";
import CardList from "./CardArrary";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

function App() {
  return (
    <div className="tc">
    <h1>Robot Friends</h1>
    <Searchbox />
      <CardList robots={robots} />
      <Card />
    </div>
  );
}

export default App;
