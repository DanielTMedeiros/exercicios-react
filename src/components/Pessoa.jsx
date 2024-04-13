import React, { Component } from "react";

class Pessoa extends Component {
  render() {
    const { nome, idade, cidade } = this.props.dados;
    if (idade < 18) {
      return <h5> Pessoa Menor de Idade</h5>;
    } else {
      return (
        <div>
          <h5>Dados da pessoa</h5>
          <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Cidade: {cidade}</p>
          </div>
        </div>
      );
    }
  }
}

export default Pessoa;
