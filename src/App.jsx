import "./App.css";
//import Pessoa from "./components/Pessoa";
//import ListaPessoa from "./components/ListaNomes";
import ListaTarefas from "./components/ListaTarefas";

function App() {
  let mostralista = true;
  const tarefas = [
    "Estudar",
    "Jogar videogame",
    "Assistir filmes",
    "Fazer exercícios de React",
    "Limpar louça",
  ];
  return (
    <div>
      {mostralista ? (
        <ListaTarefas tarefas={tarefas} />
      ) : (
        <h5>Lista oculta!</h5>
      )}
    </div>
  );
}

export default App;
