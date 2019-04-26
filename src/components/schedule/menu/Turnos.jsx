import React from "react"
import {Menu} from "antd"

export const Turnos = (props) => {
    const {...others} = props //previne bug com futuros props recebidas
    return(
        <Menu  mode="inline" onClick={props.changeTurno}>
            <Menu.SubMenu title ="turnos">
                <Menu.Item >Manha</Menu.Item>
                <Menu.Item >Tarde</Menu.Item>
                <Menu.Item >Noite</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}
