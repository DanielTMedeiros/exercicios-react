import "./App.css";
//import Pessoa from "./components/Pessoa";
import ListaPessoa from "./components/ListaNomes";

function App() {
  const pessoaDados = [
    "Daniel",
    "Edna",
    "Cake",
    "Leto",
    "Jujuba",
    "Gizmo",
    "Inquilino",
  ];
  return (
    <div>
      <ListaPessoa lista={pessoaDados} />
    </div>
  );
}

export default App;
