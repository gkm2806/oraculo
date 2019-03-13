//@ts-check
import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"

import ScheduleMenu from "./ScheduleMenu"
import ScheduleViewer from "./ScheduleViewer"

class Schedule extends Component {
  state = {
    searched: ""
  }

  setSearched = (query) => {
    this.setState({searched:query})
    console.log(this.props.aulas.filter(aula => Object.values(aula).indexOf(this.state.searched)))
  }
  
  render() {
    const { ctx, settings, aulas } = this.props
    return (
      <Grid>
        <Grid.Column width={2}>
          <ScheduleMenu setSearched={this.setSearched} ctx={ctx} />
        </Grid.Column>

        <Grid.Column ctx={{}} stretched width={14} id="ScheduleGrid">
          <ScheduleViewer aulas={aulas.filter(aula => (Object.values(aula)).includes(this.state.searched))} timeStamps={settings[0].timeStamps} />
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