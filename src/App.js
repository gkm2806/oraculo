//@ts-check
import React, { Component } from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {Spin} from "antd"
import MenuNav from "./components/menu/Menu"
import Schedule from "./components/schedule/Schedule"
import Manager from "./components/manager/Manager"
import Aula from "./components/manager/Aula"
import UserLogin from "./components/user/UserLogin"
import NoAcess from "./components/NoAcess"
import Auth from "./utils/Auth.js"

class App extends Component {

  render() {
    const {user,globalLoading} = this.props
    return (
      <div className="App">
        <MenuNav name="Oraculo" ></MenuNav>
        <main>
            {globalLoading ? (
              <center><Spin style={{marginTop:"20%"}} spinning={globalLoading} delay={500}></Spin></center>
            ):(
          <Switch>
              <Route 
                component={(match) => <Schedule type="salas" match={match} ctx={this.props.salas} />}
                path="/salas/:search" 
              />
              <Route 
                component={(match) => <Schedule type="turmas" match={match} ctx={this.props.turmas} />}
                path="/turmas/:search" 
              />
               <Route 
                component={() => <Schedule type="salas" ctx={this.props.salas} />}
                path="/salas/" 
              />
              <Route 
                component={() => <Schedule type="turmas" ctx={this.props.turmas} />}
                path="/turmas/" 
              />
              <Route component={Auth(Manager,user,1,NoAcess)} exact path="/manager" ></Route>
              <Route component={Auth(Aula,user,1,NoAcess)} exact path="/aula" ></Route>
              <Route component={UserLogin} exact path="/login" ></Route>
          </Switch>
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  salas: state.salas.locais,
  turmas: state.turmas,
  user: state.user,
  globalLoading: state.settings.globalLoading
})

export default withRouter(connect(mapStateToProps)(App));