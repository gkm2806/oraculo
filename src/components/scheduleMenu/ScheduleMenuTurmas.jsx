import React, { Component } from "react";
import { Grid, Menu } from 'semantic-ui-react'
import {connect} from "react-redux"

import Schedule from "../schedule/Schedule"

const ScheduleMenuTurmas =({turmas}) => {

    const handleItemClick = (e, { name }) => console.log("Hj nao") 
  
    
    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            {turmas && turmas.map((turma) => { return(
              <Menu.Item key={turma.id} name={turma.nome} turma={turma}/>
            )})}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14}>
        </Grid.Column>
      </Grid>
    )
  
}
export default ScheduleMenuTurmas