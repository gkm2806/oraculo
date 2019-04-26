import React, { Component } from "react";
import { connect } from "react-redux"
import { Col, Layout } from "antd"
import { bindActionCreators } from "redux"
import { Creators as SearchActions } from "../store/ducks/search"
import capitalizer from "../utils/capitalizer"
import ScheduleMenu from "../components/schedule/menu/ScheduleMenu"
import ScheduleViewer from "../components/schedule/viewer/ScheduleViewer"
import MenuNav from "../components/menu/Menu"


class ScheduleLayout extends Component {
  state = {
    searched: ""
  }
  componentDidMount() {
    const { match, updateSearch } = this.props

    match && (
      updateSearch(capitalizer(match.match.params.search))
    )
  }

  setSearched = (query) => {
    this.props.updateSearch(query)
  }
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const { ctx, settings, aulas, type, search, salas, turmas } = this.props
    return (
      <Layout>
        <Header><MenuNav style={{ width: "100%" }} /></Header>
        <Layout>
          <Sider 
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <ScheduleMenu salas={salas} turmas={turmas} type={type} setSearched={this.setSearched} ctx={ctx} /></Sider>
          <Content><ScheduleViewer type={type} search={search.searched} aulas={aulas.filter(aula => (Object.values(aula)).includes(search.searched))} timeStamps={settings.timeStamps} /></Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Created by @gkm2806 | IFMS-Corumbá
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state, props) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleLayout)