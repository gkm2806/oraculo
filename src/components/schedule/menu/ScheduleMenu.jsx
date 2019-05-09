import React, { Component } from "react";
import {Menu} from "antd"


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
  render() {
    const { ctx, type } = this.props
    return (
      <Menu
        style={{ width: "100%" }}
        mode="inline"
        current={this.state.current}
      >
        <Menu.SubMenu onClick={this.handleClick} key={type} title={type}>
          {ctx.map((obj) => {
            return (
              <Menu.Item key={obj.nome} > {obj.nome} </Menu.Item>)
          })}
        </Menu.SubMenu>
      </Menu>
    )
  }
}

export default ScheduleMenu