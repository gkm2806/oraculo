import React, { Component } from "react";
import { Card, Button, Modal } from "antd"
import Aula from "../manager/Aula"
import Auth from "../../utils/Auth"

class ScheduleAulaCreate extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        const { dia, time, search, type } = this.props
        return (
            <div>
                <Card className="hoverable" onClick={this.showModal}>
                    Vazio
                </Card>
                <Modal
                    title="criar aula"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer = {[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>
                      ]}
                >
                    <Aula type={type.substring(0, type.length-1)} /* remove o 's' no plural de Types */ search={search} dia={dia} time={time} />
                </Modal>
            </div>
        )
    }
}

export default ScheduleAulaCreate;