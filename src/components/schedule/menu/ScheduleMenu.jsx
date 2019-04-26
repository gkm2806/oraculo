import React, { Component } from "react";
import {Menu, Divider} from "antd"

import {Turnos} from "./Turnos"

class ScheduleMenu extends Component {
  state = {
    current: '',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    this.props.setSearched(e.key)
  }
  componentWillUnmount(){
    this.setState({current:this.props.type})
  }
  Itens = () => {

  }
  render() {
    const { ctx, type, turmas, salas } = this.props
    return (
      <div>
      <Turnos />
      <Menu
        style={{ width: "100%" }}
        mode="inline"
        current={this.state.current}
      >
        <Menu.SubMenu onClick={this.handleClick} key={type} title={type}>
          {type=="salas" && salas.map((obj) => {
            return (
              <Menu.Item key={obj.nome} > {obj.nome} </Menu.Item>)
          })}
          {type=="turmas" && turmas.map((obj) => {
            return (
              <Menu.Item key={obj.nome} > {obj.nome} </Menu.Item>)
          })}
        </Menu.SubMenu>
      </Menu>
      </div>
    )
  }
}

export default ScheduleMenu