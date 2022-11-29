import "./App.css";
import ItemList from "./components/ItemList";
import list from "./assets/list.json";
import React from "react";
import Planner from "./components/Planner";

function App() {
  const [selected, setSelected] = React.useState([]);
  const alphaList = list.data;
  alphaList.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="App">
      <div className="app-body">
        <div className="page-title">Organization Planner</div>
        <div className="page-desc">
          This app is a planner designed for people who need help deciding what tasks they should get done in a day. You can sort/filter items based on various criteria and then view the total estimated hours to complete all items for the day!
        </div>
        <ItemList
          data={alphaList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Planner selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
