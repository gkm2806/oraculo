import React, { Component } from "react";
import UserLogin from "./UserLogin"
import UserProfile from "./UserProfile"
import {Menu,Dropdown, Icon, Avatar} from "antd"


class User extends Component {
    render() {
        const {user, logout} = this.props;
        return (
        <Dropdown overlay={<MenuUser user={user} logout={logout} />} >
          <a className="ant-dropdown-link" href="#">
          {(user.permission != 1
            ? (<div><Icon type="user" /> usuário <Icon type="down" /></div>)
            : (<div><Avatar src={user.photo} /> usuário <Icon type="down" /></div>)
          )}
          </a>
        </Dropdown>
            
        )
    }
}

const MenuUser = ({user, logout}) => {
  return (
  <Menu >
      {user && !user.username 
        ? (<UserLogin />) 
        : (<UserProfile logout={logout} user={user} />)
      }
  </Menu>
)}

export default User