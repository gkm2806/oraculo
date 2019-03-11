//@ts-check
import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

import ScheduleMenu from "./ScheduleMenu"
import ScheduleViwer from "./ScheduleViwer"

class Schedule extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { ctx } = this.props
    return (
      <Grid>
        <Grid.Column width={2}>
          <ScheduleMenu ctx={ctx} />
        </Grid.Column>

        <Grid.Column ctx={{}} stretched width={14} id="ScheduleGrid">
          <ScheduleViwer />
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  salas: state.salas,
  turmas: state.turmas
})
export default connect(mapStateToProps)(Schedule)