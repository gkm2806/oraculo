import React, { Component } from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';

import MenuNav from "./components/menu/Menu"
import Schedule from "./components/schedule/Schedule"
import Manager from "./components/manager/Manager"
import Aula from "./components/manager/Aula"
import UserLogin from "./components/user/UserLogin"



class App extends Component {

  render() {
    return (
      <div className="App">
        <MenuNav name="Oraculo" ></MenuNav>
        <main>
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
              <Route component={UserLogin} exact path="/login" ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  salas: state.salas,
  turmas: state.turmas
})

export default connect(mapStateToProps)(App);
