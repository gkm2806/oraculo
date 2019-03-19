//@ts-check
import React, { Component } from "react";
import {Menu} from "antd"

class ScheduleMenu extends Component {
  state = {
    current: '',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    this.props.setSearched(e.key)
  }

  render() {
    const { ctx } = this.props
    return (
      <Menu
      style={{ width: "100%" }}
      onClick={this.handleClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
        {ctx.map((obj) => {
          return (
            <Menu.Item key={obj.nome} > {obj.nome} </Menu.Item>)
        })}
      </Menu>
    )
  }
}

export default ScheduleMenu