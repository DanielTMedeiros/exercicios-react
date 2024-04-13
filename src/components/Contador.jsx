import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  //para mudar o estado do contador, é preciso usar state
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
      </div>
    );
  }
}

export default Contador;
