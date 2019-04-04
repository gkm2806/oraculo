import React, { Component } from "react";
import { Card, Modal } from "antd"
class ScheduleAula extends Component {
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
        const {aula} = this.props
        return (
            <div>
                <Card className="hoverable aula" onClick={this.showModal}>
                    {aula.materia}
                </Card>
                <Modal
                    title={aula.materia}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>{aula.horaInicio} | {aula.horaFim}</p>
                    <p>{aula.turma}</p>
                    <p>{aula.sala}</p>
                    <p>{aula.materia}</p>
                    <p>{aula.professor}</p>
                </Modal>
            </div>
        )
    }
}

export default ScheduleAula;