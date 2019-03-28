import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { Menu, Icon } from 'antd';
import moment from "moment";

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
    const { user } = this.props
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Link to="/salas">
            <Icon type="table" /> Salas
          </Link>
        </Menu.Item>

        <Menu.Item key="app">
          <Link to="/turmas">
            <Icon type="table" /> Turmas
          </Link>
        </Menu.Item>


        <Menu.Item key="clock" disabled style={{ float: "right" }}>
          <Icon type="clock-circle" /> {moment().format("HH:mm")}
        </Menu.Item>
        <Menu.Item key="user" style={{ float: "right" }}>
          <Link to="/login">
            <Icon type="user" /> Usuario
          </Link>
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
  user: state.user
})

export default withRouter(connect(mapState)(MenuNav));