import React, { Component } from "react"
import {Button} from "antd"

class UserProfile extends Component {
    render() {
        const {user, logout} = this.props;
        return (
            <div style={{width:"100%", display:"flex", paddingTop: "1.5em"}}>
                <h1> Bem-vindo, {user && user.userName} </h1>
                <Button onClick={()=>logout()}>Sair</Button>
            </div>
        )
    }
}
export default UserProfile;