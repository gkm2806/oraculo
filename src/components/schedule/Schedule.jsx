//@ts-check
import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

import ScheduleMenu from "./ScheduleMenu"
import ScheduleViewer from "./ScheduleViewer"

class Schedule extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { ctx, settings, aulas } = this.props
    return (
      <Grid>
        <Grid.Column width={2}>
          <ScheduleMenu ctx={ctx} />
        </Grid.Column>

        <Grid.Column ctx={{}} stretched width={14} id="ScheduleGrid">
          <ScheduleViewer aulas={aulas} timeStamps={settings[0].timeStamps} />
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  salas: state.salas,
  turmas: state.turmas,
  settings: state.settings,
  aulas: state.aulas
})
export default connect(mapStateToProps)(Schedule)