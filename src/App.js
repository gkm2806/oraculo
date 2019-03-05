import React, { Component } from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'

import MenuNav from "./components/menu/Menu"
import Socorro from "./components/Socorro"
import ScheduleTurmas from "./components/scheduleMenu/ScheduleMenuTurmas"
import ScheduleSalas from "./components/scheduleMenu/ScheduleMenuSalas"

class App extends Component {
  state = {
    name: "Aloooo"
  }
  alo = (a) => {
    console.log(a)
    this.setState({
      name: a
    })
  }
  render() {
    return (
      <div className="App">
        <MenuNav name={this.state.name} alo={this.alo} ></MenuNav>
        <Switch >
          <main>   
            <Route component={ScheduleTurmas} exact path="/" ></Route>
            <Route component={ScheduleSalas} exact path="/salas" ></Route>
            <Route component={ScheduleTurmas} exact path="/turmas" ></Route>
          </main>
        </Switch>
      </div>
    );
  }
}

export default App;
