import React, { Component } from 'react'
import Gandalf from "../resources/images/gandalf.gif"

class NoAcess extends Component {

  render() {
    return (
      <center>
        {Gandalf ? <img alt="Gandalf fodao n deixando ninguem passar" src={Gandalf} /> : <h1> YOU SHALL NOT PASS </h1>}
      </center>
    );
  }
}

export default NoAcess