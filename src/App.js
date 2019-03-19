import React, { Component } from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Aula from "./components/manager/Aula"

import MenuNav from "./components/menu/Menu"
import Schedule from "./components/schedule/Schedule"
import Manager from "./components/manager/Manager"
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App">
        <MenuNav name="Oraculo" ></MenuNav>
        <Switch>
            <Route 
              component={() => <Schedule type="salas" ctx={this.props.salas} />}
              exact path="/salas" 
            />
            <Route 
              component={() => <Schedule type="turmas" ctx={this.props.turmas} />}
              exact path="/turmas" 
            />
            <Route component={Manager} exact path="/manager" ></Route>
            <Route component={Aula} exact path="/aula" ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  salas: state.salas,
  turmas: state.turmas
})

export default connect(mapStateToProps)(App);
