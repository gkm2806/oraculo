//@ts-check
import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

class ScheduleMenu extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.setSearched(name);
  }

  render() {
    const { activeItem } = this.state
    const { ctx } = this.props
    return (
      <Menu fluid vertical tabular>
        {ctx.map((obj) => {
          return (
            <Menu.Item key={obj.id} name={obj.nome} active={activeItem === obj.nome} onClick={this.handleItemClick} />)
        })}
      </Menu>
    )
  }
}

export default ScheduleMenu