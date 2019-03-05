import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import {connect} from "react-redux"

import Schedule from "../schedule/Schedule"

class ScheduleMenuTurmas extends Component{
    state = { activeItem: ""}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })   
  
    render() {
      const { activeItem } = this.state
      const { turmas } = this.props
      return (
        <Grid>
          <Grid.Column width={2}>
            <Menu fluid vertical tabular>
              {turmas.map((turma) => {
                return(
                <Menu.Item key={turma.id} name={turma.nome} turma={turma} active={activeItem === turma.nome} onClick={this.handleItemClick} />)
              })}
            </Menu>
          </Grid.Column>
  
          <Grid.Column stretched width={14}>
          </Grid.Column>
        </Grid>
      )
    }
}
const mapStateToProps = (state) => ({
  turmas: state.turmas
})
export default connect(mapStateToProps)(ScheduleMenuTurmas)