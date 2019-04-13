import React, { Component } from "react";
import { connect } from "react-redux"
import { Col } from "antd"
import {bindActionCreators} from "redux"
import {Creators as SearchActions } from "../../store/ducks/search"
import capitalizer from "../../utils/capitalizer"
import ScheduleMenu from "./menu/ScheduleMenu"
import ScheduleViewer from "./viewer/ScheduleViewer"

class Schedule extends Component {
  state = {
    searched: ""
  }
  componentDidMount(){
    const { match} = this.props 

    match && (
      this.setState({searched: capitalizer(match.match.params.search)})
    )
  }

  setSearched = (query) => {
    this.props.updateSearch(query)
  }

  render() {
    const { ctx, settings, aulas, type,search } = this.props
    return (

      <div style={{ width: "100%" }}>
        {aulas &&
          <div>
            <Col span={3}>
              <ScheduleMenu type={type} setSearched={this.setSearched} ctx={ctx} />
            </Col>
            <Col span={20} style={{ marginLeft: "1rem" }}>
              <ScheduleViewer type={type} search={search.searched} aulas={aulas.filter(aula => (Object.values(aula)).includes(search.searched))} timeStamps={settings.timeStamps} />
            </Col>
          </div>
        }
      </div>

    )
  }
}
const mapStateToProps = (state,props) => ({
  salas: state.salas,
  turmas: state.turmas,
  settings: state.settings,
  aulas: state.aulas.aulas,
  search: state.search,
  match: props.match
})
const mapDispatchToProps = dispatch => bindActionCreators({
  ...SearchActions
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Schedule)