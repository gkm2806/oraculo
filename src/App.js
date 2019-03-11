import React, { Component } from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'

import MenuNav from "./components/menu/Menu"
import Socorro from "./components/Socorro"
import ScheduleMenu from "./components/scheduleMenu/ScheduleMenu"
import Manager from "./components/manager/Manager"
import { connect } from 'react-redux';


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
            <Route 
              component={() => <ScheduleMenu ctx={this.props.salas} />}
              exact path="/salas" 
            />
            <Route 
              component={() => <ScheduleMenu ctx={this.props.turmas} />}
              exact path="/turmas" 
            />
            <Route component={Manager} exact path="/Manager" ></Route>
          </main>
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
