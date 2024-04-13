import React, { Component } from "react";

class ListaTarefas extends Component {
  render() {
    const { tarefas } = this.props;
    return (
      <div>
        <h5>Tarefas a realizar:</h5>
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaTarefas;
