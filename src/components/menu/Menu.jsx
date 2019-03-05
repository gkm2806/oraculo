import React, { Component } from 'react'
import { Icon, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import { connect } from "react-redux";

class MenuNav extends Component {
  state = {
    user: {
      isLoaded: false
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  alo = () => {
    console.log("Alo do Menu")
    this.props.alo("batata");
  }
  render() {
    const { activeItem } = this.state
    const { user } = this.props
    console.log(user)
    return (
      <Menu>
        <Menu.Item
          name={this.props.name}
          onClick={this.alo}
        />
        <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/salas'
          name='salas'
          active={activeItem === 'salas'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link} to='/turmas'
          name='turmas'
          active={activeItem === 'turmas'}
          onClick={this.handleItemClick}
        />


        <Menu.Menu position='right'>
          <Menu.Item
            as={Link} to='/manage'
            name='manage'
            active={activeItem === 'manage'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to='/login'
            name='user'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
          >
            <Icon name="user"></Icon>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
const mapState = (state) => ({
  user: state.firebase.auth
})

export default withRouter(connect()(MenuNav));