import React, { Component } from "react";

class ListaNomes extends Component {
  render() {
    const { lista } = this.props;
    return (
      <div>
        <h5>Lista de Nomes</h5>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaNomes;
