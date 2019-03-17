import React, { Component } from "react";
import { Card, Button, Modal } from "antd"
import Aula from "../manager/Aula"

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
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Aula type={type} search={search} dia={dia} time={time} />
                </Modal>
            </div>
        )
    }
}

export default ScheduleAulaCreate;