import React, { Component } from "react";

class AdicionarTarefa extends Component {
  constructor(props) {
    super(props);
    this.state = { tarefas: [], itemAtual: "" };
  }

  handleMudanca = (event) => {
    this.setState({ itemAtual: event.target.value });
  };

  handle;

  handleAdicionarTarefa = () => {
    const tarefaClone = this.state.tarefas.slice();
    tarefaClone.push(this.state.itemAtual);
    this.setState({ tarefas: tarefaClone, itemAtual: "" });
  };

  handleRemoverTarefa = (index) => {
    this.setState((itemAnterior) => ({
      tarefas: itemAnterior.tarefas.filter((item, idx) => idx !== index),
    }));
  };

  render() {
    return (
      <div>
        <h5>Lista de tarefas tarefas!</h5>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          value={this.state.itemAtual}
          onChange={this.handleMudanca}
        />
        <button type="submmit" onClick={this.handleAdicionarTarefa}>
          Adicionar
        </button>
        <div>
          <ul>
            {this.state.tarefas.map((item, index) => (
              <div>
                <li key={index}>{item}</li>
                <button onClick={() => this.handleRemoverTarefa(index)}>
                  Remover
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AdicionarTarefa;
