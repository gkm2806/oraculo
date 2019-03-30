import React, { Component } from 'react'
import Gandalf from "../utils/gandalf.gif"

class NoAcess extends Component {

  render() {
    return (
      <center>
        {Gandalf ? <img src={Gandalf} /> : <h1> YOU SHALL NOT PASS </h1>}
      </center>
    );
  }
}

export default NoAcess