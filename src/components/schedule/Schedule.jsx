//@ts-check
import React, { Component } from "react";
import { connect } from "react-redux"
import { Row, Col } from "antd"

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
    const { ctx, settings, aulas, type} = this.props
    return (
      <div style={{width:"100%"}}>
        <Col span={3}>
          <ScheduleMenu type={type}  setSearched={this.setSearched} ctx={ctx} />
        </Col>

        <Col span={20} style={{marginLeft: "1rem"}}>
          <ScheduleViewer type={type} search ={this.state.searched} aulas={aulas.filter(aula => (Object.values(aula)).includes(this.state.searched))} timeStamps={settings[0].timeStamps} />
        </Col>
      </div>
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