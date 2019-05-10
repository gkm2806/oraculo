import React, { Component } from "react";
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import {Creators as SearchActions } from "../../store/ducks/search"
import capitalizer from "../../utils/capitalizer"
import ScheduleViewer from "./viewer/ScheduleViewer"

class Schedule extends Component {
  componentDidMount(){
    const {match} = this.props 
    match && this.props.updateSearch(capitalizer(match.match.params.search))
  }

  setSearched = (query) => {
    this.props.updateSearch(query)
  }

  render() {
    const { ctx, settings, aulas, type,search } = this.props
    return (

      <div style={{ width: "100%" }}>
        {aulas &&
            <ScheduleViewer ctx={ctx} type={type} search={capitalizer(search.searched)} aulas={aulas.filter(aula => (Object.values(aula)).includes(capitalizer(search.searched)))} timeStamps={settings.timeStamps} />
        }
      </div>

    )
  }
}
const mapStateToProps = (state,props) => ({
  salas: state.salas.locais,
  turmas: state.turmas.turmas,
  settings: state.settings,
  aulas: state.aulas.aulas,
  search: state.search,
  match: props.match
})
const mapDispatchToProps = dispatch => bindActionCreators({
  ...SearchActions
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Schedule)