//@ts-check
import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

import Schedule from "../schedule/Schedule"

class ScheduleMenuSalas extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { salas } = this.props
    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            {salas.map((sala) => {
              return (
                <Menu.Item key={sala.id} name={sala.nome} active={activeItem === sala.nome} onClick={this.handleItemClick} />)
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
  salas: state.salas
})
export default connect(mapStateToProps)(ScheduleMenuSalas)