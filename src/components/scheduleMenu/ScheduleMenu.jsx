//@ts-check
import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

import Schedule from "../schedule/Schedule"

class ScheduleMenu extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { ctx } = this.props
    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            {ctx.map((obj) => {
              return (
                <Menu.Item key={obj.id} name={obj.nome} active={activeItem === obj.nome} onClick={this.handleItemClick} />)
            })}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14} id="ScheduleGrid">
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  salas: state.salas,
  turmas: state.turmas
})
export default connect(mapStateToProps)(ScheduleMenu)