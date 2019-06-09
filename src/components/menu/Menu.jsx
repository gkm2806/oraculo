import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { Menu, Icon, Input, Dropdown } from 'antd';
import { Creators as SearchActions } from "../../store/ducks/search"
import { Creators as userActions } from "../../store/ducks/user"

import { bindActionCreators } from "redux"
import moment from "moment";
import User from "../user/User"

const logoutDropdown = () => {
  this.setState({
    visible: false
  })
  this.props.logoutUser()
}

class MenuNav extends Component {
  state = {
    current: '',
    tempo: moment.now()
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const { user, updateSearch, turmas, salas, logoutUser } = this.props
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

        <SubMenu key="salas" title={<span><Icon type="table" /><span>Locais</span></span>}>
          <MenuItemGroup key="g1">
          {salas.map((obj) => {
            return (
              <Menu.Item key={obj.nome} > <Link to={`/salas/${obj.nome}`} >{obj.nome} </Link> </Menu.Item>)
          })}
          </MenuItemGroup>
        </SubMenu>

        <SubMenu key="turmas" title={<span><Icon type="table" /><span>Turmas</span></span>}>
          <MenuItemGroup key="g1">
          {turmas.map((obj) => {
            return (
              <Menu.Item key={obj._id} > <Link to={`/turmas/${obj.nome}`} >{obj.nome} </Link> </Menu.Item>)
          })}
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="serach">
          <Input.Search
            placeholder="Buscador"
            onSearch={value => updateSearch(value)}
            style={{ width: 200 }}
          />
        </Menu.Item>


        <Menu.Item key="clock" disabled style={{ float: "right" }}>
          <Icon type="clock-circle" /> {moment().format("HH:mm")}
        </Menu.Item>

        <Menu.Item key="user" style={{ float: "right" }}>
          <User user={user} logout={logoutUser}/>
        </Menu.Item>

        {(user.permission >= 1) &&
          <Menu.Item key="manager" style={{ float: "right" }}>
            <Link to="/manager">
              <Icon type="setting" /> manager
          </Link>
          </Menu.Item>
        }
        {(user.permission >= 1) &&
          <Menu.Item key="createAula" style={{ float: "right" }}>
            <Link to="/aula">
              <Icon type="setting" /> criar aula
          </Link>
          </Menu.Item>
        }
        
      </Menu>
    )
  }
}
const mapState = (state) => ({
  user: state.user,
  salas: state.salas.locais,
  turmas: state.turmas.turmas
})
const mapDispatchToProps = dispatch => bindActionCreators({
  ...SearchActions,
  ...userActions
}, dispatch)

export default withRouter(connect(mapState, mapDispatchToProps)(MenuNav));