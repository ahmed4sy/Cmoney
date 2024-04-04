import "./Styles/App.css";
import Inp from "./Componets/Inp";

let moneys = [
  { id: 1, title: "SDG" },
  { id: 2, title: "EGP" },
  { id: 3, title: "SAR" },
  { id: 4, title: "OMR" },
  { id: 5, title: "USD" },
];

function App() {
  let optionM = moneys.map((money) => {
    return <option key={money.id}>{money.title}</option>;
  });
  return (
    <div className="App">
      <header className="App-header">
        <Inp opM={optionM} />
      </header>
    </div>
  );
}

export default App;
