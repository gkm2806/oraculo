import React, { Component } from "react";
import UserLogin from "./UserLogin"
import UserProfile from "./UserProfile"
import {Menu,Dropdown, Icon} from "antd"


class User extends Component {
    render() {
        const {user, logout} = this.props;
        return (
        <Dropdown overlay={<MenuUser user={user} logout={logout} />} >
          <a className="ant-dropdown-link" href="#">
            TESTE <Icon type="down" />
          </a>
        </Dropdown>
            
        )
    }
}

const MenuUser = ({user, logout}) => {
  return (
  <Menu >
      {user && !user.userName ? (<UserLogin />) : (<UserProfile logout={logout} user={user} />)}
  </Menu>
)}

export default User